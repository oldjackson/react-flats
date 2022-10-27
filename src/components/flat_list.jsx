// import React, { Component } from 'react';
import React from 'react';
import Flat from './flat';

function FlatList({ flats, clickFunction }) {
  return (
    <div className="flat-list">
      {
        flats.map(
          ({
            id, name, imageUrl, price, priceCurrency, lat, lng
          }) => (
            <Flat
              name={name}
              imageUrl={imageUrl}
              price={price}
              priceCurrency={priceCurrency}
              lat={lat}
              lng={lng}
              key={id}
              id={id}
              clickFunction={clickFunction}
            />
          )
        )
      }
    </div>
  );
}

export default FlatList;
