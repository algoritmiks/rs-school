import React from 'react';

function TodayCard (props) {
  return (
    <div className="weather-today">
      <div className="city"> {props.state.location}</div>
      <div className="country"> {props.state.country}</div>
      <div className="time"></div>
      <div className="weather">
        <div className="temperature"> {props.weather.temp} </div>
        <img className="weather-icon-today" src={props.weather.picture} alt="weather"></img>
        <div>{props.weather.descr}</div>
        <div>{props.weather.feel}</div>
        <div>{props.weather.humidity}</div>
        <div>{props.weather.wind}</div>
      </div>
      
    </div>
  );
}

export default TodayCard;



