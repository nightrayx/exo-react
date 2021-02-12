import React from 'react'


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Localisation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <h4>Localisation</h4>
      </div>
    );
  }
}


export default Map