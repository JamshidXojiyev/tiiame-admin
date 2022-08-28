import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const ObjectMapComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const MapContainerStyle = styled(MapContainer)`
  width: 100%;
  height: 400px;
`;
