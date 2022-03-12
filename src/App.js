import React from "react";
import { Route, Switch } from "react-router-dom";
import MainMenu from "./pages/main-menu/main-menu";
import SignIn from "./pages/SignIn/signin";
import { positions, Provider as AlertProvider } from "react-alert";
import { ReactComponent as ErrorAlertIcon } from "./assets/icons/error-alert.svg";
import { ReactComponent as SuccessAlertIcon } from "./assets/icons/success-alert.svg";
import { ReactComponent as InfoAlertIcon } from "./assets/icons/info-alert.svg";
import { AlertStyle } from "./global-styles/alert-style.s";

const AlertTemplate = ({ options, message, close }) => (
  <AlertStyle type={options.type} style={{ padding: "12px 16px" }}>
    {options.type === "info" && <InfoAlertIcon />}
    {options.type === "success" && <SuccessAlertIcon />}
    {options.type === "error" && <ErrorAlertIcon />}
    {message}
  </AlertStyle>
);

function App() {
  const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 4000,
    offset: "4px",
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route path="/" component={MainMenu} />
      </Switch>
    </AlertProvider>
  );
}

export default App;
