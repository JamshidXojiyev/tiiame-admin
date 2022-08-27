import { Constansts } from "../../server/constants";

export const addNavigation = (navigation) => {
  return {
    type: Constansts.ADD_NAVIGATION,
    payload: navigation,
  };
};
