import styled, { css } from "styled-components";

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

export const TextareaStyle = styled.textarea`
  border: 1px solid #e4e6ee;
  border-radius: 4px;

  width: ${({ width }) => (width ? width : "100%")};
  height: 170px;
  resize: none;

  padding: 12px 16px;
  background-color: #fff;
  color: #101010;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  :focus {
    outline: none !important;
    box-shadow: 2px 2px 10px 0px #e5e5e5;
  }
  ::placeholder {
    color: #9fa2b4;
  }
  ${({ error }) => (error ? errorStyle : "")}
`;
export const LabelStyle = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 4px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #101010;
`;
export const ErrorStyle = styled.label``;
