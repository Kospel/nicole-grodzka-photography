import classnames from 'classnames';
import React, {
  FunctionComponent,
  memo,
  useCallback,
  useState,
  useRef,
  createRef,
  useMemo,
} from 'react';

import Icon, { ICONS } from 'common/icon';

import { PhotoCarouselProps } from './interfaces';

const PhotoCarousel: FunctionComponent<PhotoCarouselProps> = ({ photos }) => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const isFirstPhoto = useMemo(() => currentPhoto === 0, [currentPhoto]);
  const isLastPhoto = useMemo(() => currentPhoto === photos.length - 1, [
    photos,
    currentPhoto,
  ]);

  const PHOTO_SPACING = useMemo(() => 20, []);

  /* Create refs for photos */
  const imgRefs = useRef([]);
  imgRefs.current = useMemo(
    () => photos.map((_, index) => imgRefs.current[index] ?? createRef()),
    [photos],
  );

  /* Render all photos */
  const renderedPhotos = useMemo(
    () =>
      photos.map(({ src }, index) => (
        <img key={index} src={src} ref={imgRefs.current[index]} />
      )),
    [photos],
  );

  /* Handle navigation */
  const handlePrevImage = useCallback(() => {
    if (!isFirstPhoto) {
      const updatedPhotoIndex = currentPhoto - 1;
      const updatedPhotoPosition =
        currentPosition +
        imgRefs.current[updatedPhotoIndex].current.offsetWidth +
        PHOTO_SPACING;

      setCurrentPhoto(updatedPhotoIndex);
      setCurrentPosition(updatedPhotoPosition);
    }
  }, [isFirstPhoto, currentPhoto, imgRefs.current, currentPosition]);

  const handleNextImage = useCallback(() => {
    if (!isLastPhoto) {
      setCurrentPosition(
        currentPosition -
          imgRefs.current[currentPhoto].current.offsetWidth -
          PHOTO_SPACING,
      );
      setCurrentPhoto(currentPhoto + 1);
    }
  }, [isLastPhoto, currentPosition, imgRefs.current]);

  const prevNavigationClassnames = useMemo(
    () =>
      classnames('image-navigation', 'prev', {
        disabled: isFirstPhoto,
      }),
    [isFirstPhoto],
  );

  const nextNavigationClassnames = useMemo(
    () =>
      classnames('image-navigation', 'next', {
        disabled: isLastPhoto,
      }),
    [isLastPhoto],
  );

  /* RENDER */
  return (
    <div className="photo-carousel">
      <Icon
        className={prevNavigationClassnames}
        icon={ICONS.PREVIOUS}
        size="3x"
        onClick={handlePrevImage}
      />
      <div
        className="images-wrapper"
        style={{ transform: `translateX(${currentPosition}px)` }}
      >
        {renderedPhotos}
      </div>
      <Icon
        className={nextNavigationClassnames}
        icon={ICONS.NEXT}
        size="3x"
        onClick={handleNextImage}
      />
    </div>
  );
};

export default memo(PhotoCarousel);
