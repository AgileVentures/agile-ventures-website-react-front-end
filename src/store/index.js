import {createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import eventsReducer from "../reducers/eventsReducer";
import hangoutsReducer from "../reducers/hangoutsReducer";

const rootReducer = combineReducers({events: eventsReducer, hangouts: hangoutsReducer})
export default createStore(rootReducer, applyMiddleware(thunk));
