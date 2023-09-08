import * as Types from "../type";

export const InsertKeyWord = (payload) => {
  return {
    type: Types.INSERT_KEYWORD,
    item: payload,
  };
};
