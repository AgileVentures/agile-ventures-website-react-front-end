import { GET_HANGOUTS } from "../types";
import { ADD_HANGOUTS_PAGE } from "../types";
import initialState from "./initialState";

const hangoutsReducer = (state = initialState.hangouts, action) => {
  switch (action.type) {
  case GET_HANGOUTS:
    return [ ...action.payload ];
  case ADD_HANGOUTS_PAGE:
    return [ ...state, ...action.payload ];
  default:
    return state;
  }
};

export default hangoutsReducer;
