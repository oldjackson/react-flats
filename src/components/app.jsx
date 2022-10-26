// import React, { Component } from 'react';
import React from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

function App() {
  return (
    <div>
      <FlatList flats={flats} />
      <div className="map-container">
        <h1>Map container</h1>
      </div>
    </div>
  );
}

export default App;
