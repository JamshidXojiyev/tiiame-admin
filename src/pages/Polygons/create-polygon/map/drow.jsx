import React from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

function Drow(props) {
  const drawOptions = {
    metric: false,
    circle: false,
    circlemarker: false,
    marker: false,
    polyline: false,
    polygon: true,
    rectangle: false,
  };
  return (
    <FeatureGroup>
      <EditControl position="topright" draw={drawOptions} />
    </FeatureGroup>
  );
}

export default Drow;
