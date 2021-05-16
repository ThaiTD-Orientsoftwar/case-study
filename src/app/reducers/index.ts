import { combineReducers } from "redux";
import getEmployeesReducer from "./employee";

export default combineReducers({
  employees: getEmployeesReducer,
});
