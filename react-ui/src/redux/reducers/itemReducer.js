import * as Types from "../type";

const itemReducer = (state = "", action) => {
  switch (action.type) {
    case Types.INSERT_APIKEY:
      return action.item;
    default:
      return state;
  }
};

export default itemReducer;
