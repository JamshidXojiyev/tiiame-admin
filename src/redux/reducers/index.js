import { combineReducers } from "redux";
import navigations from "./navigationReducer";

const rootReducers = combineReducers({
  navigations,
});

export default rootReducers;
