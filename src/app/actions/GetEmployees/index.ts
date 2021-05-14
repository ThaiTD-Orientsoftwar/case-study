import {
  GetEmployeesRequest,
  GetEmployeesResponse,
} from "../../models/GetEmployees";

export const GET_EMPLOYEES = "GET_IMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "GET_IMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_ERROR = "GET_IMPLOYEES_ERROR";

export const getEmployees = () => {
  return {
    type: GET_EMPLOYEES,
  };
};

export const getEmployeesSuccess = (res: GetEmployeesResponse) => {
  return {
    type: GET_EMPLOYEES_SUCCESS,
    payload: res,
  };
};

export const getEmployeesError = (res: any) => {
  return {
    type: GET_EMPLOYEES_ERROR,
    payload: res,
  };
};
