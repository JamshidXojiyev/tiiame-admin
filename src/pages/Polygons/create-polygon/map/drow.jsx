import React from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

function Drow(props) {
  const drawOptions = {
    metric: false,
    circle: false,
    circlemarker: false,
    marker: true,
    polyline: false,
    polygon: true,
    rectangle: false,
  };

  const _onCreated = (e) => {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      console.log(`${(layerType, layer.getLatLngs()[0])}`);
    } else {
      console.log(e);
    }
  };
  const _onEdited = (e) => {
    const { layerType, layer } = e;
    console.log(layer.getLatLngs()[0]);
  };
  const _onDeleted = (e) => {
    const { layerType, layer } = e;
    console.log(layer.getLatLngs()[0]);
  };
  const asd = [
    {
      lat: 68.39918004344189,
      lng: -168.75000000000003,
    },
    {
      lat: 68.39918004344189,
      lng: 168.48632812500003,
    },
    {
      lat: -68.33437594128185,
      lng: 168.57421875000003,
    },
    {
      lat: -68.33437594128185,
      lng: -168.75000000000003,
    },
  ];

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        draw={drawOptions}
        onCreated={_onCreated}
        onEdited={_onEdited}
        onDeleted={_onDeleted}
      />
    </FeatureGroup>
  );
}

export default Drow;
