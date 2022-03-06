import React from 'react';
import Searchbar from './Searchbar/Searchbar';
// import s from './App.module.css';

export default class App extends React.Component {
  state = {
    pages: 1,
    searchQuery: '',
    arrImg: [],
  };

  fetchImg = async () => {
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
    console.log(r);
    this.renderImg(r.hits);
  };

  renderImg = arrImg => {
    this.setState(prevState => ({
      arrImg: [...prevState.arrImg, ...arrImg],
    }));
    console.log(this.state.arrImg);
  };

  setSearchQuery = inputQuery => {
    this.setState({
      searchQuery: inputQuery,
      pages: 1,
    });
  };

  componentDidMount() {
    this.fetchImg();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.searchQuery !== prevState.searchQuery) {
      console.log('Обновили Слово');
      this.fetchImg();
    }
  }

  render() {
    return (
      <div>
        <Searchbar setSearchQuery={this.setSearchQuery} />
      </div>
    );
  }
}
