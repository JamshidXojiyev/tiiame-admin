import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const state = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default state;
