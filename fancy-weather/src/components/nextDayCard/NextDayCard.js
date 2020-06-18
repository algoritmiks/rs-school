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
      <div className="descr"> { description } </div>
      <div className="temp"> { temperature } </div>
      <img className="weather-icon-future" src={imageURL} alt="weather"></img>
    </div>
  );
}

export default NextDayCard;
