import styled from "styled-components";

export const DialogStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(43, 43, 43, 0.5);
  z-index: 99999;
`;
export const DialogContainer = styled.div`
  max-width: 70%;
  max-height: calc(100vh - 60px);
  padding: 12px 18px;
  background: #ffffff;
  border-radius: 8px;
  z-index: 999;
`;
export const DialogHeader = styled.div`
  border-bottom: 1px solid #e4e6ee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;
export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  height: 38px;
  display: flex;
  align-items: center;
`;
export const DialogBody = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  display: grid;
  grid-gap: 12px;
`;
export const DialogClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: rgba(16, 16, 16, 0.2);
  z-index: 99;
`;
