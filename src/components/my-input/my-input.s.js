import styled, { css } from "styled-components";
import MyButton from "../my-button/my-button";

const darckStyle = css`
  border: 1px solid #101010;

  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
const liteStyle = css`
  border: 1px solid #e4e6ee;
  border-radius: 4px;

  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
`;
const searchStyle = css`
  height: 49px;
  background: #ffffff;
  border-radius: 51px;
  color: #878eab;
  border: 0;
`;
const errorStyle = css`
  border: 1px solid #ff333f;
  animation: animate 0.7s linear forwards;
  color: #ff333f;
  @keyframes animate {
    0% {
      transform: translateX(5px);
    }
    10% {
      transform: translateX(-5px);
    }
    20% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    40% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(-5px);
    }
    60% {
      transform: translateX(5px);
    }
    70% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(5px);
    }
    90% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const InputStyle = styled.input`
  && {
    width: ${({ width }) => (width ? width : "100%")};
    height: 42px;
    border-radius: 8px;
    padding: 12px 16px;
    background-color: #fff;
    color: #101010;
    font-family: Montserrat;
    font-style: normal;
    ${({ darck, search }) =>
      darck ? darckStyle : search ? searchStyle : liteStyle}
    :focus {
      outline: none !important;
      box-shadow: 2px 2px 10px 0px #e5e5e5;
    }
    ::placeholder {
      color: #9fa2b4;
    }
    ${({ error }) => (error ? errorStyle : "")}
  }
`;
export const IconStyle = styled(MyButton)`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-19px);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const LabelStyle = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 2px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #101010;
`;
export const ErrorStyle = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #ff333f;
`;
