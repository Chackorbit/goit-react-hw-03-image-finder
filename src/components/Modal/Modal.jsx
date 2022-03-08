import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  // state = {
  //   showModal: true,
  // };

  //   toggleModal = () => {
  // console.log("🚀 ~ toggleModal", toggleModal)
  //     this.setState(({ showModal }) => ({
  //       showModal: !showModal,
  //     }));
  //   };

  render() {
    return (
      <div className={s.overlay}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    );
  }
}
