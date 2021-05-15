import {
  AddEmployeeRequest,
  AddEmployeeResponse,
} from "../../models/AddEmployee";

export const ADD_EMPLOYEE = "ADD_IMPLOYEE";
export const ADD_EMPLOYEE_SUCCESS = "ADD_IMPLOYEE_SUCCESS";
export const ADD_EMPLOYEE_ERROR = "ADD_IMPLOYEE_ERROR";

export const addEmployee = () => {
  return {
    type: ADD_EMPLOYEE,
  };
};

export const addEmployeeSuccess = (res: AddEmployeeResponse) => {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    payload: res,
  };
};

export const addEmployeeError = (res: any) => {
  return {
    type: ADD_EMPLOYEE_ERROR,
    payload: res,
  };
};
