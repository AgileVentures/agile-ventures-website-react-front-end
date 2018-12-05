import hangoutsReducer from "../reducers/hangoutsReducer";
import { GET_HANGOUTS, ADD_HANGOUTS_PAGE } from "../types";

describe("hangoutsReducer", () => {
  it("defaults to empty hangouts if none are passed in", () => {
    expect(hangoutsReducer(undefined, {})).toEqual([]);
  });

  it("resets hangouts array", () => {
    expect(
      hangoutsReducer(["Initial"], {
        type: GET_HANGOUTS,
        payload: ["Run", "the", "tests"]
      })
    ).toEqual(["Run", "the", "tests"]);
  });

  it("adds new hangouts to the array", () => {
    expect(
      hangoutsReducer(["Initial"], {
        type: ADD_HANGOUTS_PAGE,
        payload: ["Run", "the", "tests"]
      })
    ).toEqual(["Initial", "Run","the", "tests"]);
  });
});
