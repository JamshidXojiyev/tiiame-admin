import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "leaflet/dist/leaflet.css"; // or 'leaflet/dist/leaflet.css'
import "react-leaflet-fullscreen/dist/styles.css"; // react full screen

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import state from "./redux/configStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={state}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
