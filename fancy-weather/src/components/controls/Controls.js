import React, { useState } from 'react';
import Units from '../units/Units';
import Search from '../search/Search';

function Controls(props) {
  const [ animation, setAnimation ] = useState('');

  const updateClick = () => {
    setAnimation('spinner-animation');
    props.getImageFromAPI()
      .then(()=>{
          setTimeout(()=> { setAnimation('') }, 1500) })
  }

  const onChangeLanguage = (e) => {
      props.changeLanguage(e.target.value.toLowerCase())
  }
  
  return (
    <div className="controls">
      <button className="update-button" onClick={() => updateClick()}>
        <img className={`spinner ${animation}`} src="img/spinner.svg" alt="spinner"></img>
      </button>
      <select className="language-selector" onChange={(e) => onChangeLanguage(e)}>
        <option>EN</option>
        <option>RU</option>
        <option>BE</option>
      </select>
      <Units />
      <Search changeLocation = { props.changeLocation } state = {props.state}/>
    </div>
  );
}

export default Controls;