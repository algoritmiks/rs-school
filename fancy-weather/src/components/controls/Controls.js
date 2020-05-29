import React from 'react';

function Controls(props) {
  return (
    <div className="controls">
      <button onClick={() => props.getImageFromAPI()}>Update</button>
    </div>
  );
}

export default Controls;