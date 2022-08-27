import styled from "styled-components";
import { Layout } from "antd";
const { Header, Content } = Layout;

export const LayoutContainer = styled(Layout)`
  width: 100%;
  height: 100vh;
`;
export const LogoComponent = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;
export const HeaderComponent = styled(Header)`
  padding: 0;
  background: #fff;
`;
export const HamburgerButton = styled.div`
  && {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
`;
export const ContentComponent = styled(Content)`
  /* background: #fff; */
  margin: 24px 16px;
  /* padding: 24px; */
  /* min-height: 280px; */
`;
