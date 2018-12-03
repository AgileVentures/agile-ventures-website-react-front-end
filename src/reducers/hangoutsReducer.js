import { GET_HANGOUTS } from "../types";

const hangoutsReducer = (state = [], action) => {
  switch (action.type) {
  case GET_HANGOUTS:
    return [ ...state, ...action.payload ];
  default:
    return state;
  }
};

export default hangoutsReducer;
