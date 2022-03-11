import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ arrImg, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {arrImg.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
