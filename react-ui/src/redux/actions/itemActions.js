import * as Types from "../type";

export const InsertKey = (payload) => {
  return {
    type: Types.INSERT_APIKEY,
    item: payload,
  };
};
