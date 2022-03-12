import styled, { css } from "styled-components";

const darckStyle = css`
  background: #101010;
  border-radius: 8px;
  width: ${({ width }) => (width ? width : "100%")};
  padding: 12px 10px;
  font-family: Inter;
  font-style: normal;
  color: #ffffff;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
`;
const blueStyle = css`
  background: #5459ea;
  border-radius: 4px;
  width: ${({ width }) => (width ? width : "100%")};
  padding: 12px 10px;
  font-family: Poppins;
  font-style: normal;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
`;
const iconStyle = css`
  && {
    width: 38px;
    height: 38px;
    background: ${({ bgNone }) => (bgNone ? "#f2f3f600" : "#fff")};
    color: #101010;
    border-radius: 50%;
    :hover {
      background: ${({ bg }) => (bg ? bg : "")};
    }
  }
`;

export const ButtonStyle = styled.button`
  border: 0;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.2;
          cursor: context-menu;
        `
      : css`
          opacity: 1;
          cursor: pointer;
        `};
  ${({ darck, icon }) => (darck ? darckStyle : icon ? iconStyle : blueStyle)}
`;
