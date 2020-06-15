import React from 'react';
import TodayCard from '../todayCard/todayCard';

export class Weather extends React.Component {
  
  render() {
    return (
      <div className="weather-wrapper">
        <TodayCard state = { this.props.state }/>
      </div>
    )
  }
}

export default Weather;