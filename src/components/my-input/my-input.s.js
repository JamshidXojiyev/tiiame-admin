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

  font-weight: 500;
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

export const InputStyle = styled.input`
  && {
    width: ${({ width }) => (width ? width : "100%")};
    height: 42px;
    border-radius: 8px;
    padding: 12px 16px;
    background-color: #fff;
    color: #101010;
    font-family: Inter;
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
  margin-bottom: 4px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #101010;
`;
export const ErrorStyle = styled.label``;
