import styled, { css } from "styled-components";

const centerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const lineStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
const lineRightStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;
const blockStyle = css`
  background: #ffffff;
  border-radius: 12px;
  padding: 17px 24px;
  height: auto;
`;
export const MyDiv = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  ${({ center }) => (center ? centerStyle : null)}
  ${({ block }) => (block ? blockStyle : null)}
  ${({ line }) => (line ? lineStyle : null)}
  ${({ lineRight }) => (lineRight ? lineRightStyle : null)}
`;
