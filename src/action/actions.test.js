import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
const { setSearchField, setRequestRobots } = actions;
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

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
  it("handle REQUEST_ROBOTS_PENDING action", () => {
    const store = mockStore();
    store.dispatch(setRequestRobots());
    const action = store.getActions();
    // console.log('action', action)
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
