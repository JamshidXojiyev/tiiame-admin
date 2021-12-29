import React, { useState } from "react";
import {
  FeatureGroup,
  LayersControl,
  MapContainer,
  Polygon,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { Wrap } from "./map.s";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";
import { latLng } from "leaflet";

function MyMap(props) {
  const polygon = [
    [10, -11],
    [10, 11],
    [-53, 110],
    [-53, -110],
  ];
  const purpleOptions = { color: "purple" };

  const [mapLayers, setMapLayers] = useState([]);

  const _onEditPath = (e) => {
    const { layerType, layer } = e;
    if (layerType == "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latLngs: layer.getLatLngs()[0] },
      ]);
    }
  };
  const _onCreate = (e) => {
    const { layerType, layer } = e;
    if (layerType == "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latLngs: layer.getLatLngs()[0] },
      ]);
    }
  };
  const _onDeleted = (e) => {
    console.log(e);
  };

  console.log(JSON.stringify(mapLayers, 0, 2));
  return (
    <Wrap>
      <MapContainer
        // maxBoundsViscosity={0}
        // maxBounds={[
        //   [53, -110],
        //   [53, 110],
        //   [-53, 110],
        //   [-53, -110],
        // ]}
        center={[41.32368123473394, 69.29481300121184]}
        zoom={16}
        // maxZoom={6}
        // minZoom={3}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Sputnik">
            <TileLayer
              attribution="&copy;"
              url="https://raw.githubusercontent.com/JamshidXojiyev/tiiame-map/main/dark/{z}/{y}/{x}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Xariyta">
            <TileLayer
              attribution="&copy;"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <FeatureGroup>
            <EditControl
              position="topright"
              onEdited={_onEditPath}
              onCreated={_onCreate}
              onDeleted={_onDeleted}
              draw={{
                rectangle: false,
              }}
            />
          </FeatureGroup>

          {/* <Polygon
            pathOptions={purpleOptions}
            positions={polygon}
            onclick={handleClick}
          >
            <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
          </Polygon> */}
        </LayersControl>
      </MapContainer>
    </Wrap>
  );
}

export default MyMap;
