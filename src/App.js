import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {
  ContentComponent,
  HamburgerButton,
  HeaderComponent,
  LayoutContainer,
  LogoComponent,
} from "./global-styles/app.s";
import { AppStaticData } from "./server/app-static-data";
import ObjectPage from "./pages/objects/object";
import NavigationsPage from "./pages/navigations/navigations";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;

const App = () => {
  let history = useHistory();

  const [collapsed, setCollapsed] = useState(false);
  return (
    <LayoutContainer>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <LogoComponent />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["object"]}
          items={AppStaticData.menu_items}
          onClick={(e) => history.push(e.key)}
        />
      </Sider>
      <Layout>
        <HeaderComponent>
          <HamburgerButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </HamburgerButton>
        </HeaderComponent>
        <ContentComponent>
          <Switch>
            <Route path="/navigations">
              <NavigationsPage />
            </Route>
            <Route path="/">
              <ObjectPage />
            </Route>
          </Switch>
        </ContentComponent>
      </Layout>
    </LayoutContainer>
  );
};

export default App;
