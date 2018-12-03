import axios from "axios";
import { GET_HANGOUTS } from "../types";

export let getHangouts = hangouts => ({ type: GET_HANGOUTS, payload: hangouts });

export let fetchHangouts = () => dispatch => {
  return axios.get("/hangouts.json").then(response => {
    console.log(response)
    dispatch(getHangouts(response.data));
  });
};
