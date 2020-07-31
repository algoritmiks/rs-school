import React from 'react';
import Clock from '../clock/Clock';

function TodayCard (props) {
  let currentTemp, feelsTemp;

  if (props.state.units === 'C') {
    currentTemp = props.weather.temp;
    feelsTemp = props.weather.feel;

  } else {
    currentTemp = props.weather.tempF;
    feelsTemp = props.weather.feelF;
  }

  return (
    <div className="weather-today">
      <div className="city"> {props.state.location}</div>
      <div className="country"> {props.state.country}</div>
      <div className="time">
        <Clock 
            timezone = {props.state.timezone}
            contryCode = {props.state.countryCode}
         />
      </div>
      <div className="weather">
        <div className="temperature"> {currentTemp} </div>
        <img className="weather-icon-today" src={props.weather.picture} alt="weather"></img>
        <div className="weather-details">
          <div><p>{props.weather.descr}</p></div>
          <div><p>{feelsTemp}</p></div>
          <div><p>{props.weather.humidity}</p></div>
          <div><p>{props.weather.wind}</p></div>
        </div>
      </div>
    </div>
  );
}

export default TodayCard;



