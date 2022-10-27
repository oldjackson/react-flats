import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

export default function SimpleMap(props) {
  const { flats, center, zoom } = props;
  return (
    <div className="map-container" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        zoom={zoom}
      >
        { flats.map(
          ({
            id, lat, lng, price, priceCurrency
          }) => (
            <Marker
              lat={lat}
              lng={lng}
              text={`${price} ${priceCurrency}`}
              key={id}
            />
          )
        ) }
      </GoogleMapReact>
    </div>
  );
}
