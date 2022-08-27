import { Constansts } from "../../server/constants";
import { ObjectsData } from "../../server/objects-data";

const initialState = ObjectsData;

const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Constansts.ADD_OBJECT:
      return state;

    default:
      return state;
  }
};

export default languageReducer;
