import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  state = {
    showModal: true,
  };

  //   toggleModal = () => {
  //     this.setState(({ showModal }) => ({
  //       showModal: !showModal,
  //     }));
  //   };

  render() {
    const { img } = this.props;

    return (
      <div class={s.overlay}>
        <div class={s.modal}>
          <img src={img.largeImageURL} alt={img.tags} />
        </div>
      </div>
    );
  }
}

const two = 2;
