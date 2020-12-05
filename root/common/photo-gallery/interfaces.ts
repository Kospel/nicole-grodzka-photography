export interface Photo {
  src: string;
  width: number;
  height: number;
}

export interface PhotoGalleryProps {
  photos: Photo[];
}
