import React from "react";
import { LayersControl, Polygon, TileLayer } from "react-leaflet";
import { MapContainerStyle } from "./polygon-map.s";
import { FullscreenControl } from "react-leaflet-fullscreen";
import Drow from "./drow";

function PolygonMap(props) {
  return (
    <MapContainerStyle
      {...props}
      center={props.center ? props.center : [0, 0]}
      zoom={props.zoom ? props.zoom : 0}
      scrollWheelZoom={props.scrollWheelZoom ? props.scrollWheelZoom : true}
      maxZoom={4}
    >
      {props.polygon?.length > 0 && (
        <Polygon
          positions={props.polygon}
          pathOptions={{ color: "#ff00005a" }}
        />
      )}
      <Drow />

      <FullscreenControl />
      <LayersControl>
        <LayersControl.BaseLayer checked name="TIIAME 3D map - dark">
          <TileLayer
            eventHandlers={{
              add: (e) => {
                props.layer("TIIAME 3D map - dark");
              },
            }}
            noWrap={true}
            // url="https://raw.githubusercontent.com/JamshidXojiyev/tiiame-map/main/buxoro-map/{z}/{x}/{y}.png"
            url="https://raw.githubusercontent.com/JamshidXojiyev/tiiame-map/main/dark/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="3D Map Dark Mode">
          <TileLayer
            eventHandlers={{
              add: (e) => {
                props.layer("3D Map Light Mode");
              },
            }}
            noWrap={true}
            url="https://raw.githubusercontent.com/JamshidXojiyev/tiiame-map/main/lite/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            eventHandlers={{
              add: (e) => {
                props.layer("OpenStreetMap");
              },
            }}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainerStyle>
  );
}

export default PolygonMap;
