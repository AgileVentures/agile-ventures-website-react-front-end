import axios from "axios";
import { GET_HANGOUTS } from "../types";
import { ADD_HANGOUTS_PAGE } from "../types";

export let getHangouts = hangouts => ({ type: GET_HANGOUTS, payload: hangouts });

export let fetchHangouts = () => dispatch => {
  return axios.get("https://develop.websiteone.agileventures.org/api/v1/event_instances").then(response => {
    dispatch(getHangouts(response.data));
  });
};

export let addToHangouts = hangouts => ({ type: ADD_HANGOUTS_PAGE, payload: hangouts });

export let fetchHangoutsPage = (page) => dispatch => {
  //This is tor pagination and the url needs to contain the page number
  return axios.get("https://develop.websiteone.agileventures.org/api/v1/event_instances").then(response => {
    dispatch(addToHangouts(response.data));
  });
};
