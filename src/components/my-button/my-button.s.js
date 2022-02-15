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
  font-family: Inter;
  font-style: normal;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;
const iconStyle = css`
  && {
    /* padding: 12px; */
    width: 38px;
    height: 38px;
    background: ${({ bgNone }) => (bgNone ? "#f2f3f600" : "#fff")};
    color: #101010;
    border-radius: 50%;
    transition: transform 300ms, background-color: 300ms;
    animation: ${({ shadowAnime }) => (shadowAnime ? "pulse 500ms" : "")};
    :hover {
      background: ${({ bg }) => (bg ? bg : "")};
    }
    :active {
      /* transform: scale(0.95); */
      animation: none;
    }
    @keyframes pulse {
      from {
        box-shadow: #5459EA 0 0 0;
      }
      to {
        box-shadow: #5459EA00 0 0 18px;
      }
    }
  }
`;

export const ButtonStyle = styled.button`
  border: 0;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  cursor: pointer;
  ${({ darck, icon }) => (darck ? darckStyle : icon ? iconStyle : blueStyle)}
`;
