import { GET_EVENTS } from "../types";

const eventsReducer = (state = [], action) => {
  switch (action.type) {
  case GET_EVENTS:
    return [ ...state, ...action.payload ];
  default:
    return state;
  }
};

export default eventsReducer;
