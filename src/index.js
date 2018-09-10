import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";

import Header from "./components/header"
import MapHoc from "./components/MapHoc";

const App = () => (
    <div>
        <Header />
        <MapHoc />
    </div>
  );
  
  render(
    <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
    );