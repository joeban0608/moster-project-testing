import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const {
  setSearchField,
  setRequestRobots,
  fetchRobotsSuccess,
  fetchRobotsFailed,
  fetchRobotsStart,
} = actions;

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import { mockRobots } from "../components/MainPage/MainPage.test";

const mockStore = configureMockStore([thunkMiddleware]);

describe("handle setSearchField action", () => {
  it("should create an action to search robots", () => {
    const text = "ervin";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text,
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });
});

describe("handle robots request Api", () => {
  it("handle REQUEST_ROBOTS_PENDING action 1", () => {
    const store = mockStore();
    store.dispatch(setRequestRobots());
    const action = store.getActions();
    // console.log('action', action)
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("handle fetchRobotsStart", () => {
    expect(fetchRobotsStart().type).toEqual(REQUEST_ROBOTS_PENDING);
  });

  it("should create fetchRobotsSuccess action", () => {
    const action = fetchRobotsSuccess(mockRobots);
    expect(action.type).toEqual(REQUEST_ROBOTS_SUCCESS);
    expect(action.payload).toEqual(mockRobots);
  });

  it("handle fetchRobotsFailed action", () => {
    const action = fetchRobotsFailed(Error);
    expect(action.type).toEqual(REQUEST_ROBOTS_FAILED);
    expect(action.payload).toEqual(Error);
  });

  it("another way handle setRequestRobots action", () => {
    const mockActionCreator = setRequestRobots();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchRobotsStart());
  });
});
