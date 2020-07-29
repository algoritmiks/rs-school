import React, { useState } from 'react';

function Units(props) {
  const [ units, changeUnitsInState ] = useState('switcher');

  const onChangeUnits = () => {
    if ( units.includes('switcher_on') ) {
      changeUnitsInState('switcher');
      props.changeUnits('C');
    } else {
      changeUnitsInState('switcher switcher_on');
      props.changeUnits('F');
    }
  }

  return (
    <div className={ units } onClick={ onChangeUnits }></div>
  );
}

export default Units;