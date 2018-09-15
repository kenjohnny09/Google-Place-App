import React, { Component } from 'react';
import { connect } from 'react-redux'
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
      <div style={{ height: '600px', width: '800px'}}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.location}
        >
          <Map
            lat= {this.props.location.lat}
            lng= {this.props.location.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {location: state.location.location};
}


export default connect(mapStateToProps)(MapContainer)
