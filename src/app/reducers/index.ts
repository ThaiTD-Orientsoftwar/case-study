import { combineReducers } from "redux";
import getEmployeesReducer from "./GetEmployees";

export default combineReducers({
  employees: getEmployeesReducer,
});
