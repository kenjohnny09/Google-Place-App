import React from 'react';
import { compose, withProps } from "recompose";
import "../styles.css";

import {
    withScriptjs,
  } from "react-google-maps";
import SearchInput from "./SearchInput";
import MapContainer from './Map';
import SearchList from './SearchList';

const MapHoc = compose(
    withProps({
      loadingElement: <div style={{ height: `100%` }} />,
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCaQF9rGGRc8HPoGN8I0zMjsPggexfxB0o&v=3.exp&libraries=geometry,drawing,places",
    }),
    withScriptjs
  )( props =>
    <div className="container">
        <div className="container-item">
            <SearchInput/>

            <SearchList />

        </div>
        <MapContainer />
    </div>
  )
  
  export default MapHoc;

