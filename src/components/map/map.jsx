import React from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { Wrap } from "./map.s";
function MyMap(props) {
  const polygon = [
    [53, -110],
    [53, 110],
    [-53, 110],
    [-53, -110],
  ];
  const purpleOptions = { color: "purple" };
  return (
    <Wrap>
      <MapContainer
        maxBoundsViscosity={0}
        maxBounds={[
          [53, -110],
          [53, 110],
          [-53, 110],
          [-53, -110],
        ]}
        center={[0, 0]}
        zoom={3}
        maxZoom={6}
        minZoom={3}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="jpg">
            <TileLayer
              attribution="&copy;"
              url="https://raw.githubusercontent.com/JamshidXojiyev/img/main/132/{z}/{x}/{y}.png"
            />
            {/* <Polygon pathOptions={purpleOptions} positions={polygon}>
              <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
            </Polygon> */}
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="png">
            <TileLayer
              attribution="&copy;"
              url="https://raw.githubusercontent.com/JamshidXojiyev/SmartGuide/main/map/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </Wrap>
  );
}

export default MyMap;
