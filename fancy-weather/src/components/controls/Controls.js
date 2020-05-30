import React, { useState } from 'react';
import './controls.css';


function Controls(props) {
  const [ animation, setAnimation ] = useState('');
  const updateClick = () => {
    setAnimation('spinner-animation');
    props.getImageFromAPI()
      .then(()=>{
          setTimeout(()=> {
            setAnimation('');
          }, 1500);
        }
      )
  }
  return (
    <div className="controls">
      <button className="updateButton" onClick={() => updateClick()}>
        <img className={`spinner ${animation}`} src="img/spinner.svg" alt="spinner"></img>
      </button>
    </div>
  );
}

export default Controls;