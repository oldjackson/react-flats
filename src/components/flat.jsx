import React, { Component } from 'react';

class Flat extends Component {
  updateMap = () => {
    const { lat, lng } = this.props;
    console.log(`Lat: ${lat}, Lng: ${lng}`);
  };

  computeStyle() {
    const { imageUrl } = this.props;
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("${imageUrl}")`
    };
  }

  render() {
    const { name, price, priceCurrency } = this.props;

    return (
      <div className="card" style={this.computeStyle()}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" onClick={this.updateMap} href="#" />
      </div>
    );
  }
}

export default Flat;
