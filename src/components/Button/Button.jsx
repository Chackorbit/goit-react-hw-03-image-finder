import React, { Component } from 'react';
import s from './Button.module.css';

export default class Button extends Component {
  state = {};

  render() {
    return (
      <button type="button" className={s.button} onClick={this.props.loadMore}>
        Load more
      </button>
    );
  }
}
