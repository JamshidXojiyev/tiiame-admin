import React, { useState } from "react";
import {
  Body,
  BottomBtn,
  Header,
  Item,
  ItemBlock,
  MenuName,
  Sidebar,
  SubItem,
  SubItemBlock,
  User,
  UserEmail,
  UserImg,
  UserName,
} from "./main-menu.s";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import MyButton from "../../components/my-button/my-button";
import { MyDiv } from "../../global-styles/my-div.s";
import { NavigationData } from "./navigation-data";
import { Route, Switch } from "react-router-dom";
import ParentClasses from "../Navigations/parent-classes/parent-classes";
import ChildClasses from "../Navigations/child-classes/child-classes";
import Polygons from "../Polygons/polygons";
import News from "../News/news";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";

function MainMenu(props) {
  const location = useLocation();
  const [positionMenu, setPositionMenu] = useState(true);
  const [subItemType, setSubItemType] = useState(true);
  return (
    <MyDiv position="relative">
      <Header position={positionMenu}>
        <MyButton
          onClick={() => {
            setSubItemType(!positionMenu && subItemType ? true : false);
            setPositionMenu(!positionMenu);
          }}
          icon={<MenuIcon />}
          shadowAnime
          /* bgBlue */
        />
        <MenuName>Dashboard</MenuName>
      </Header>
      <Sidebar position={positionMenu}>
        <User>
          <UserImg src="https://staff.tiiame.uz/storage/users/photos/Lkx5S1D5yHL6r6bE6VHRQ6c321LLDdXb6aivp9m3.jpeg" />
          <MyDiv padding="5px 0 0 0">
            <UserName>Oymatov Rustam</UserName>
            <UserEmail>rustam.oymatov@gmail.com </UserEmail>
          </MyDiv>
        </User>
        {NavigationData.map((item, index) => (
          <ItemBlock key={index}>
            <Item
              onClick={() => {
                if (item.parent) {
                  setSubItemType(!subItemType);
                  setPositionMenu(true);
                }
              }}
              to={item.url}
              activ={location.pathname === item.url ? true : false}
            >
              {item.icon && item.icon}

              {item.name}
              {item.parent && <BottomBtn position={subItemType} />}
            </Item>
            {item.parent && (
              <SubItemBlock position={subItemType} positionMenu={positionMenu}>
                {item.parent?.map((subItem, subIndex) => (
                  <SubItem
                    to={subItem.url}
                    key={subIndex}
                    activ={location.pathname === subItem.url ? true : false}
                  >
                    {subItem.name}
                  </SubItem>
                ))}
              </SubItemBlock>
            )}
          </ItemBlock>
        ))}
      </Sidebar>
      <Body position={positionMenu}>
        <Switch>
          {/*   {NavigationData.map((item, index) => {
            <>
              <Route key={index} exact path={item.url}>
                {item.component && <item.component />}
              </Route>

              {item.parent?.map((subItem, subIndex) => {
                <Route key={subIndex} exact path={subItem.url}>
                  {subItem.component}
                </Route>;
              })}
            </>;
          })} */}
          <Route
            exact
            path="/navigations/parent-classes"
            component={ParentClasses}
          />
          <Route
            exact
            path="/navigations/child-classes"
            component={ChildClasses}
          />
          <Route exact path="/polygons" component={Polygons} />
          <Route exact path="/news" component={News} />
          <Route path="*">
            <Redirect to="/navigations/parent-classes" />
          </Route>
        </Switch>
      </Body>
    </MyDiv>
  );
}

export default MainMenu;
