import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../action/constants";
import { mockRobots } from "../components/MainPage/MainPage.test";

import * as reducers from "./reducers";

const { requestRobots, searchRobots, initialStateSearch, initialStateRobots } =
  reducers;

describe("searchRobots", () => {
  it("should return the initial state", () => {
    expect(searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("should handle CHANGE_SEARCHFIELD action", () => {
    expect(
      searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  it("should return the initial state", () => {
    expect(requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING })
    ).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockRobots,
      })
    ).toEqual({
      robots: mockRobots,
      isPending: false,
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: Error,
      })
    ).toEqual({
      error: Error,
      isPending: true,
      robots: [],
    });
  });
});
