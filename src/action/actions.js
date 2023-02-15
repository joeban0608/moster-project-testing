import { apiCall } from "../api/api";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const fetchRobotsSuccess = (robots) => ({
  type: REQUEST_ROBOTS_SUCCESS,
  payload: robots,
});
export const fetchRobotsFailed = (error) => ({
  type: REQUEST_ROBOTS_FAILED,
  payload: error,
});
export const fetchRobotsStart = () => ({
  type: REQUEST_ROBOTS_PENDING,
});

export const setRequestRobots = () => (dispatch) => {
  dispatch(fetchRobotsStart());
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then((robots) => dispatch(fetchRobotsSuccess(robots)))
    .catch((error) => dispatch(fetchRobotsFailed(error)));
};
