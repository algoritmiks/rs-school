import React from 'react';

function SmallCard(props) {

  let weather = {};
  if (props.state.weather) {
    weather.pictureToday = `https://www.weatherbit.io/static/img/icons/${props.state.weather.data[0].weather.icon}.png`;
    weather.tempToday = `${Math.round(props.state.weather.data[0].temp)} °${props.state.units}` ;
  }

  return (
    <div className="weather-big">
      <div className="city"> {props.state.location}
        <div className="country"> {props.state.country}</div>
      </div>
      <div className="time"></div>
      <div className="temperature"> {weather.tempToday || 'none'} </div>
      <img src={weather.pictureToday} alt="weather"></img>
    </div>
  );
}

export default SmallCard;
