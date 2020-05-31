import React, { useState } from 'react';

function Units() {
  const [ units, changeUnitsInState ] = useState('switcher');

  const onChangeUnits = () => {
    if ( units.includes('switcher_on') ) {
      changeUnitsInState('switcher');
    } else {
      changeUnitsInState('switcher switcher_on');
    }
  }

  return (
    <div className={ units } onClick={() => onChangeUnits()}></div>
  );
}

export default Units;