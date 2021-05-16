import { combineReducers } from "redux";
import getEmployeesReducer from "./employee";

const rootReducer = combineReducers({
  employees: getEmployeesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
