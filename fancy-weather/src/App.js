import React from 'react';
import axios from 'axios';
import './style.scss';
import Controls from './components/controls/Controls';
import Weather from './components/weather/Weather';
import * as constants from './helpers/constants/constants';

export class App extends React.Component {
  state = {
    location: 'Yaroslavl',
    country: 'Russia',
    lat: '57.6263877',
    lng: '39.8933705',
    latitude: '',
    longitude: '',
    language: 'EN',
    units: 'C',
    url: 'url(/img/bg-default.jpg)',
    currentPageAPI: 1
  }

  getImageFromAPI = () => {
    return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${constants.tokens.pictures}&tags=nature,landscape&tag_mode=all&page=${this.state.currentPageAPI}&per_page=1&extras=url_c&format=json&nojsoncallback=1`)
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

  changeLocation = (newLocation) => {
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${newLocation}&key=${constants.tokens.opencagedata}&language=en_US&pretty=1`)
      .then(response => {
        if (response.data.total_results > 0) {
          // console.log(response.data)
          this.setState({
            lat: response.data.results[0].geometry.lat,
            lng: response.data.results[0].geometry.lng,
            country: response.data.results[0].components.country || 'unknown',
            location: response.data.results[0].components.administrative 
              || response.data.results[0].components.city
              || response.data.results[0].components.town
              || response.data.results[0].components.village 
              || response.data.results[0].components.county
              || response.data.results[0].components.state,
            latitude: response.data.results[0].annotations.DMS.lat,
            longitude: response.data.results[0].annotations.DMS.lng,
          });
          this.getImageFromAPI();
          // console.log(this.state)
        } else {
          alert('location not found');
        }
      })
      .catch(error => {
        alert('something wrong');
      })
  }

  getUserLocationByIP = () => {
    axios.get(`https://ipinfo.io/json?token=${constants.tokens.ipinfo}`)
      .then(response => {
        console.log(this.state);
        this.changeLocation(response.data.city);
      })
      .catch(error => {
        alert('something wrong with get location by your IP');
      });
  }

  componentDidMount() {
    this.getUserLocationByIP();
  }

  render() {
    return (
    <div className="root" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), #000), ${this.state.url}`}}>
      <div className="wrapper">
        <header className="header">
          <Controls 
            getImageFromAPI = {this.getImageFromAPI}
            changeLocation = {this.changeLocation}
          />  
        </header>
        <main>
          <Weather state = {this.state}/>
        </main>
      </div>
    </div>
    )};
}

export default App;
