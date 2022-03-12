import styled, { css } from "styled-components";

export const PageTitle = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  color: #242525;
  display: inline-block;

  ${({ borderNone }) =>
    borderNone
      ? ""
      : css`
          padding-right: 12px;
          border-right: 1px solid #c3c9e3;
        `};
`;
export const UserLimit = styled.h2`
  font-family: "Montserrat";

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #5b5f7b;
`;
export const BackPage = styled.h1`
  && {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: #242525;
    display: inline-block;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      transform: translateX(-5px) translateY(-1px) rotate(90deg);
      path {
        stroke: #242525;
      }
    }
  }
`;
