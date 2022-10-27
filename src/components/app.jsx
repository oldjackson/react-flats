// import React, { Component } from 'react';
import React from 'react';
import FlatList from './flat_list';
import SimpleMap from './simple_map';
import flats from '../../data/flats';

function App() {
  return (
    <div>
      <FlatList flats={flats} />
      <SimpleMap flats={flats} />
    </div>
  );
}

export default App;
