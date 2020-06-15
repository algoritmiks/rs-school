import React from 'react';
import TodayCard from '../todayCard/todayCard';

function Weather (props) {
  const todayWeather = {};

  if (props.state.weather) {
    const lang = props.state.localisations[`${props.state.language}`];
    const todayWeatherData = props.state.weather.data[0]; 
    const todayWeatherCode = todayWeatherData.weather.code;
    const todayFeelsTemp = Math.round( (todayWeatherData.app_min_temp + todayWeatherData.app_max_temp) / 2 );
    
    todayWeather.picture = `https://www.weatherbit.io/static/img/icons/${todayWeatherData.weather.icon}.png`;
    todayWeather.temp = `${Math.round(todayWeatherData.temp)}°`;
    todayWeather.feel = `${lang.feel} ${todayFeelsTemp}°`;
    todayWeather.descr = lang.weather[todayWeatherCode];
    todayWeather.humidity = `${lang.humidity} ${todayWeatherData.rh}%`;
    todayWeather.wind = `${lang.wind} ${Math.round(todayWeatherData.wind_spd)} m/s`
  }


  return (
    <div className="weather-wrapper">
      <TodayCard state = { props.state } weather = { todayWeather }/>
    </div>
  )
  
}

export default Weather;