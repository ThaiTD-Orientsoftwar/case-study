import { combineReducers } from "redux";
import getEmployees from "./GetEmployees";

export default combineReducers({
  getEmployees: getEmployees,
});
