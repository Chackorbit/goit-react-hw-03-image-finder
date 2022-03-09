import React, { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  state = {};

  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      console.log('ККликнул по Ескейпу');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay}>
        <div className={s.modal}>
          {this.props.children}
          {/* <img src={this.props.img.largeImageURL} alt="" /> */}
        </div>
      </div>,
      modalRoot
    );
  }
}
