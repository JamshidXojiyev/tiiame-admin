import { Constansts } from "../../server/constants";
import { NavigationsData } from "../../server/navigations-data";

const initialState = NavigationsData;

const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Constansts.ADD_NAVIGATION:
      return state;

    default:
      return state;
  }
};

export default languageReducer;
