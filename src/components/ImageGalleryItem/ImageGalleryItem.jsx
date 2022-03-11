import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        className={s.image}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
