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
        <div className="weather-details">
          <div><p>{props.weather.descr}</p></div>
          <div><p>{props.weather.feel}</p></div>
          <div><p>{props.weather.humidity}</p></div>
          <div><p>{props.weather.wind}</p></div>
        </div>
      </div>
      
    </div>
  );
}

export default TodayCard;



