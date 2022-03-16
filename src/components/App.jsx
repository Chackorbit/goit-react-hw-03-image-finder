import React from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

import Loader from './Loader/Loader';

export default class App extends React.Component {
  state = {
    pages: 1,
    searchQuery: '',
    arrImg: [],
    allImg: 0,
    showModal: false,
    modalImage: '',
    loader: false,
    btnAction: '',
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
      modalImage: '',
    });
  };

  fetchImg = async click => {
    const BASE_URL = 'https://pixabay.com/api/';

    this.onLoader(true);

    const meta = new URLSearchParams({
      key: '25149934-751328f61e2da43ec1e4df823',
      q: this.state.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: this.state.pages,
      per_page: 12,
    });

    this.activBtn('disable');

    const url = `${BASE_URL}?${meta}`;
    const fetchImg = await fetch(url);
    const r = await fetchImg.json();
    console.log(r);

    this.saveAllImg(r.totalHits);
    this.onLoader(false);
    this.activBtn('');

    click ? this.renderImg(r.hits) : this.renderMoreImg(r.hits);
  };

  onLoader = spiner => {
    this.setState({
      loader: spiner,
    });
  };

  activBtn = activ => {
    this.setState({
      btnAction: activ,
    });
  };

  saveAllImg = allImg => {
    this.setState({
      allImg: allImg,
    });
  };

  renderImg = arrImg => {
    this.setState(() => ({
      arrImg: [...arrImg],
    }));
  };

  renderMoreImg = arrImg => {
    this.setState(prevState => ({
      arrImg: [...prevState.arrImg, ...arrImg],
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  setSearchQuery = inputQuery => {
    this.setState({
      searchQuery: inputQuery,
      pages: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      pages: prevState.pages + 1,
    }));
  };

  reset = () => {
    this.setState({
      arrImg: [],
    });
  };

  componentDidMount() {
    this.fetchImg(true);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.reset();
      this.fetchImg(true);
    } else if (prevState.pages !== this.state.pages) {
      this.fetchImg(false);
    }
  }

  render() {
    const { showModal, btnAction } = this.state;
    console.log(this.state.arrImg.length);
    return (
      <div className={s.App}>
        <Searchbar setSearchQuery={this.setSearchQuery} reset={this.reset} />

        {this.state.loader && <Loader />}

        <ImageGallery arrImg={this.state.arrImg} openModal={this.openModal} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.modalImage} alt="" />
          </Modal>
        )}
        {this.state.arrImg.length === this.state.allImg ? (
          <p></p>
        ) : (
          <Button loadMore={this.loadMore} btnAction={btnAction} />
        )}
      </div>
    );
  }
}
