import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './simple_map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapCenter: {
        lat: flats[0].lat,
        lng: flats[0].lng
      },
      mapZoom: 12
    };
  }

  setCenterFunction = (lat, lng) => {
    this.setState({
      mapCenter: {
        lat,
        lng
      },
      mapZoom: 14
    });
  };

  render() {
    const { mapCenter, mapZoom } = this.state;
    return (
      <div>
        <FlatList flats={flats} clickFunction={this.setCenterFunction} />
        <SimpleMap flats={flats} center={mapCenter} zoom={mapZoom} />
      </div>
    );
  }
}

export default App;
