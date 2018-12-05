import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchHangouts, fetchHangoutsPage } from "../actions/getHangoutsAction";
import { GET_HANGOUTS, ADD_HANGOUTS_PAGE } from "../types";
import hangoutResponse from "../fixtures/hangouts.js";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe("async actions", () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("responds with a list of hangouts", () => {
    const expectedActions = [{ type: GET_HANGOUTS, payload: hangoutResponse }];
    moxios.stubRequest("https://develop.websiteone.agileventures.org/api/v1/event_instances", {
      status: 200,
      response: hangoutResponse
    });
    return store.dispatch(fetchHangouts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("responds adds new page to the list of hangouts", () => {
    const expectedActions = [{ type: ADD_HANGOUTS_PAGE, payload: hangoutResponse }];
    moxios.stubRequest("https://develop.websiteone.agileventures.org/api/v1/event_instances", {
      status: 200,
      response: hangoutResponse
    });
    return store.dispatch(fetchHangoutsPage(2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
