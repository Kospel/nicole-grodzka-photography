import React, { FunctionComponent, useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

import { PhotoGalleryProps } from './interfaces';

const PhotoGallery: FunctionComponent<PhotoGalleryProps> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback((event, photoData) => {
    setCurrentImage(photoData.index);
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setCurrentImage(0);
    setModalIsOpen(false);
  };

  return (
    <>
      <Gallery photos={photos} onClick={openModal} />
      <ModalGateway>
        {modalIsOpen ? (
          <Modal allowFullscreen={false} onClose={closeModal}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                source: photo.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default PhotoGallery;
