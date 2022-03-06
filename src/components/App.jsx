import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import s from './App.module.css';

export default class App extends React.Component {
  state = {
    pages: 1,
    searchQuery: '',
    arrImg: [],
  };

  fetchImg = async click => {
    const BASE_URL = 'https://pixabay.com/api/';

    const meta = new URLSearchParams({
      key: '25149934-751328f61e2da43ec1e4df823',
      q: this.state.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: this.state.pages,
      per_page: 12,
    });
    const url = `${BASE_URL}?${meta}`;
    const fetchImg = await fetch(url);
    const r = await fetchImg.json();

    click ? this.renderImg(r.hits) : this.renderMoreImg(r.hits);
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
    this.fetchImg();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    if (this.state.searchQuery !== prevState.searchQuery) {
      console.log('Обновили Слово');
      this.reset();
      this.fetchImg(true);
    } else if (prevState.pages !== this.state.pages) {
      console.log('Кликнули по кнопке');
      this.fetchImg(false);
    }
  }

  render() {
    return (
      <div className={s.App}>
        <Searchbar setSearchQuery={this.setSearchQuery} />
        <ImageGallery arrImg={this.state.arrImg} />
        {this.state.arrImg.length > 0 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
