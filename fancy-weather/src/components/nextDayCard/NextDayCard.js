import React from 'react';

function NextDayCard(props) {
  let temperature = 0;
  let description, imageURL;

  if (props.weather) {
    if (props.units === 'C') {
      temperature = props.weather.temp;
    } else {
      temperature = props.weather.tempF;
    }
    description = props.weather.descr;
    imageURL = props.weather.picture;
  }

  return (
    <div className="weather-future">
      <div className="descr weather-future_item"> { description } </div>
      <div className="temp weather-future_item"> { temperature } </div>
      <div className="weather-future_item">
      <img className="weather-icon-future" src={imageURL} alt="weather"></img>
      </div>
    </div>
  );
}

export default NextDayCard;
