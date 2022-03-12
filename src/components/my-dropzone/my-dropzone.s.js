import styled from "styled-components";

export const DropzoneContainer = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100px")};
  border: 1.4px dashed #cdd6e0;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
    align-items: center;
  gap: 48px;
`;
export const ValueBlock = styled.div``;
export const H1 = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #646464;
  text-align: center;
  cursor: pointer;
`;
export const SPAN = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: #ff69a5;
  cursor: pointer;
`;
export const SuccessStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
export const UpdateStyle = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 2px;
  right: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  background-color: #00000000;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #00000003;
  }
`;
