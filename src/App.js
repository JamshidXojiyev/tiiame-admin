import { Route, Switch } from "react-router";
import Auther from "./pages/author/auther";
import Home from "./pages/home/home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auther" component={Auther} />
    </Switch>
  );
}

export default App;
