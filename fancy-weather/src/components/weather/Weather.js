import React from 'react';
import TodayCard from '../todayCard/TodayCard';
import NextDayCard from '../nextDayCard/NextDayCard'

function Weather (props) {
  const todayWeather = {};
  const futureWeather = [];

  if (props.state.weather) {
    debugger
    
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
    
    const data = props.state.weather.data;
    data.forEach((el, ind) => {
      if(ind > 0) {
        futureWeather.push({
          temp: `${Math.round(el.temp)}°`,
          descr: lang.weather[el.weather.code],
          picture: `https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`
        })
      }
    })
  }


  return (
    <div className="weather-wrapper">
      <TodayCard state = { props.state } weather = { todayWeather }/>
      <div className="weather-future-wrapper">
        <NextDayCard weather = { futureWeather[0] }/>
        <NextDayCard weather = { futureWeather[1] }/>
        <NextDayCard weather = { futureWeather[2] }/>
      </div>
    </div>
  )
  
}

export default Weather;