import { MapContainer } from "react-leaflet";
import styled, { css } from "styled-components";

export const MapContainerStyle = styled(MapContainer)`
  && {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;
