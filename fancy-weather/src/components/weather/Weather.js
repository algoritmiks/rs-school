import React from 'react';
import axios from 'axios';

export class Weather extends React.Component {



  getWeatherFromAPI() {
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&key=ae1f6511beef462693bd386b58f5478c&lat=55.7504461&lon=37.6174943&lang=en`)
      .then(response => {

      })

  }

  componentDidMount() {
    // this.getWeatherFromAPI();
  }


  render() {
    return (
      
      <div className="weather-wrapper">

        <div className="weather-big">
          <div className="location"> {this.props.state.location}</div>
          <div className="time"></div>

        </div>


      </div>
    )
  }
}

export default Weather;