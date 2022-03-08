import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {};

  clickImg = e => {
    // console.log(e.target.id);
    // console.log(this.props.img.id);
    if (e.target.id == this.props.img.id) {
      console.log(this.props.showModal);
      this.setState({
        showModal: true,
      });
      return (
        <Modal>
          <img
            id={e.target.id}
            src={this.props.img.largeImageURL}
            alt={e.target.tags}
          />
        </Modal>
      );
    }
  };

  render() {
    const { img } = this.props;

    return (
      <li className={s.ImageGalleryItem} onClick={this.clickImg}>
        <img
          id={img.id}
          src={img.webformatURL}
          alt={img.tags}
          className={s.image}
        />
        {/* {this.clickImg && (
          
        )} */}
      </li>
    );
  }
}
