import React from 'react';
import mapboxgl from 'mapbox-gl';
import * as constants from '../../helpers/constants/constants';


class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = constants.tokens.mapbox;
    let map = new mapboxgl.Map({
    container: this.mapContainer, // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [this.props.lat, this.props.lng], // starting position [lng, lat]
    zoom: 8 // starting zoom
    });
    this.map = map;
  }
  
  componentDidUpdate() {
    this.map.flyTo({
      center: [
        this.props.lng,
        this.props.lat,
      ],
      essential: true,
    });
  }

  render () {
    return (
    <div>
      <div ref={el => this.mapContainer = el} className="mapContainer" />
    </div>
    )
  }
}

export default Map;