import React, { useState } from 'react';
import Units from '../units/Units';

function Controls(props) {
  const [ animation, setAnimation ] = useState('');

  const updateClick = () => {
    setAnimation('spinner-animation');
    props.getImageFromAPI()
      .then(()=>{
          setTimeout(()=> { setAnimation('') }, 1500) })
  }

  const changeLanguage = (e) => {
      console.log(e.target.value)
  }

  return (
    <div className="controls">
      <button className="update-button" onClick={() => updateClick()}>
        <img className={`spinner ${animation}`} src="img/spinner.svg" alt="spinner"></img>
      </button>
      <select className="language-selector" onChange={(e) => changeLanguage(e)}>
        <option>RU</option>
        <option>EN</option>
        <option>BE</option>
      </select>
      <Units />
    </div>
  );
}

export default Controls;