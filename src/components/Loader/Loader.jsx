import React, { Component } from 'react';
import s from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <div className={s.loader}>
        <Oval color="#00BFFF" height={100} width={110} />
      </div>
    );
  }
}
