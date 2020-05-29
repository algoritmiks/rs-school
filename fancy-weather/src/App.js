import React from 'react';
import axios from 'axios';
import './App.css';
import './components/controls/Controls';
import Controls from './components/controls/Controls';

export class App extends React.Component {
  state = {
    url: 'url(/img/bg-default.jpg)',
    currentPageAPI: 1
  }

  getImageFromAPI = () => {
    debugger
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=73bdf4a0b75179e8e2e5d2108c85bfdc&tags=nature,summer,daytime,landscape&tag_mode=all&page=${this.state.currentPageAPI}&per_page=1&extras=url_c&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          url: `url(${response.data.photos.photo[0].url_c})`,
          currentPageAPI: this.state.currentPageAPI + 1
         })
      })
      .catch(error => {
        this.setState({
          url: 'url(/img/bg-default.jpg)',
          currentPageAPI: 1
         })
      })
  }

  componentDidMount() {
    this.getImageFromAPI();
  }

  render() {
    return (
    <div className="root" style={{backgroundImage: this.state.url}}>
      <div className="wrapper">
        <header className="header">
          <Controls getImageFromAPI = {this.getImageFromAPI}/>  
        </header>
      </div>
    </div>
    )};
}

export default App;
