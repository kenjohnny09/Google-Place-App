import React from 'react';
import { compose, withProps } from "recompose";
import "../styles.css";

import {
    withScriptjs,
  } from "react-google-maps";
import SearchInput from "./SearchInput";
import MapContainer from './Map';
import HistoryTable from './HistoryTable';

const MapHoc = compose(
    withProps({
      loadingElement: <div style={{ height: `100%` }} />,
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCaQF9rGGRc8HPoGN8I0zMjsPggexfxB0o&v=3.exp&libraries=geometry,drawing,places",
    }),
    withScriptjs
  )( props =>
    <div className="container">
        <div className="container-item-1">
            <SearchInput/>
            <HistoryTable />
        </div>
        <div className="container-item-2">
            <MapContainer />
        </div>
    </div>
  )
  
  export default MapHoc;

