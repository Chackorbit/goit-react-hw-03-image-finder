import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {};

  // clickImg = e => {
  //   if (e.target.id == this.props.img.id) {
  //     return true;
  //   }
  // };

  render() {
    const { img } = this.props;
    // const largeImageURL = img.largeImageURL;

    return (
      <li className={s.ImageGalleryItem} onClick={this.clickImg}>
        <img
          id={img.id}
          src={img.webformatURL}
          alt={img.tags}
          className={s.image}
        />
      </li>
    );
  }
}
