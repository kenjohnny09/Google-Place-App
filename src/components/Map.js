import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import svgMarker from '../images/svgMarker.svg';
import "../styles.css";

const Map = () => <div><img className="marker" src={svgMarker} alt="img"/></div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 10.315,
      lng: 123.8854
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '600px', width: '800px' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Map
            lat= {10.2433023}
            lng= {123.78899219999994}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;