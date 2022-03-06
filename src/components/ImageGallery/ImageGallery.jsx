import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.arrImg.map(img => {
          return <ImageGalleryItem key={img.id} img={img} />;
        })}
      </ul>
    );
  }
}
