import React from 'react';

function TodayCard (props) {

  let weather = {};
  
  if (props.state.weather) {
    let todayWeather = props.state.weather.data[0]; 
    let weatherCode = todayWeather.weather.code;
    let feelsTemp = Math.round( (todayWeather.app_min_temp + todayWeather.app_max_temp) /2 );
    let lang = props.state.localisations[`${props.state.language}`];
    weather.pictureToday = `https://www.weatherbit.io/static/img/icons/${todayWeather.weather.icon}.png`;
    weather.tempToday = `${Math.round(todayWeather.temp)}°`;
    weather.feelTemp = `${lang.feel} ${feelsTemp}°`;
    weather.description = lang.weather[weatherCode];
  }

  return (
    <div className="weather-today">
      <div className="city"> {props.state.location}</div>
      <div className="country"> {props.state.country}</div>
      <div className="time"></div>
      <div className="weather">
        <div className="temperature"> {weather.tempToday} </div>
        <img className="weather-icon-today" src={weather.pictureToday} alt="weather"></img>
        <div>{weather.description}</div>
        <div>{weather.feelTemp}</div>
      </div>
      
    </div>
  );
}

export default TodayCard;



