import { GET_TEXTS_SUCCESS } from "./actionTypes";
export const textListReducer = (state = { texts: [] }, action) => {
  switch (action.type) {
    case GET_TEXTS_SUCCESS:
      return { texts: action.payload };
    default:
      return state;
  }
};
