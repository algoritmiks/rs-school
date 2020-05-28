import React from 'react';

function Controls() {

  const updateBackground = () => {
    alert ('asdf');
  }

  return (
    <div className="controls">
      <button onClick={() => updateBackground()}>Update</button>
    </div>
  );
}

export default Controls;