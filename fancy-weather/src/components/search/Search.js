import React, { useState } from 'react';


function Search(props) {
  const [ searchingLocation, changeSearchingLocation ] = useState('');

  const onChangeInput = (e) => {
    changeSearchingLocation(e.target.value);
  }

  const onSearchClick = () => {
    // console.log(searchingLocation);
    if (searchingLocation) {
      props.changeLocation(searchingLocation);
    }
    changeSearchingLocation('');
    // console.log('emty', searchingLocation);
  }

  const onKeyboardClick = (e) => {
    if (e.nativeEvent.code === "Enter") {
      e.preventDefault();
      onSearchClick();
    }
  }

  return (
    <div className="search-wrapper">
      <input className="search" 
        onKeyPress = { onKeyboardClick }
        placeholder={ props.state.localisations[`${props.state.language}`].placeholder}
        value = { searchingLocation } 
        onChange = { onChangeInput }>
      </input>
      <button className="search-button" onClick = { onSearchClick }> 
        <img className="search-icon" src="img/search-icon.png" alt="search-icon"></img>
      </button>
    </div>
  );
}

export default Search;