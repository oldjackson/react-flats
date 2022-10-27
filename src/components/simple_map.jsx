import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

export default function SimpleMap(props) {
  const { flats } = props;

  const defaultProps = {
    center: {
      lat: flats[0].lat,
      lng: flats[0].lng
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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
