import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { TileLayer, LayersControl } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import { useHistory } from "react-router-dom";
import { Container } from "../../global-styles/container.s";
import { HeaderContainer } from "../objects/object.s";
import { MapContainerStyle, ObjectMapComponent } from "./object-map.s";

const ObjectMap = () => {
  const history = useHistory();
  const position = [51.505, -0.09];

  return (
    <ObjectMapComponent>
      <HeaderContainer>
        <Button
          onClick={() => history.push("/object-info")}
          type="primary"
          icon={<SaveOutlined />}
        >
          Save polygon
        </Button>
      </HeaderContainer>
      <Container>
        <h1>i`ts mee</h1>

        <MapContainerStyle center={[0, 0]} zoom={0} minZoom={0} maxZoom={4}>
          <FullscreenControl />
          <LayersControl>
            <LayersControl.BaseLayer name="Dark mode">
              <TileLayer
                bounds={[
                  [68.911005, -168.75],
                  [68.656555, 167.34375],
                  [-67.875541, 167.34375],
                  [-67.609221, -168.75],
                ]}
                noWrap={true}
                url="https://raw.githubusercontent.com/JamshidXojiyev/tiiame-map/main/dark/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer checked name="Light mode">
              <TileLayer
                bounds={[
                  [68.911005, -168.75],
                  [68.656555, 167.34375],
                  [-67.875541, 167.34375],
                  [-67.609221, -168.75],
                ]}
                noWrap={true}
                url="https://raw.githubusercontent.com/JamshidXojiyev/tiiame-map/main/lite/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainerStyle>
      </Container>
    </ObjectMapComponent>
  );
};

export default ObjectMap;
