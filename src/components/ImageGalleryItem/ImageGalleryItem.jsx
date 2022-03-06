import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {};

  render() {
    const { img } = this.props;

    return (
      <li className={s.ImageGalleryItem}>
        <img src={img.webformatURL} alt="img" className={s.image} />
      </li>
    );
  }
}
