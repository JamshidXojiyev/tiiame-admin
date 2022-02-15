import React from "react";
import { Route, Switch } from "react-router-dom";
import MainMenu from "./pages/main-menu/main-menu";
import SignIn from "./pages/SignIn/signin";

function App() {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route path="/" component={MainMenu} />
    </Switch>
  );
}

export default App;
