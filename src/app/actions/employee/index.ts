import {
  GetEmployeesResponse,
  AddEmployeeResponse,
} from "../../models/employee";

//Add employee
export const ADD_EMPLOYEE = "ADD_IMPLOYEE";
export const ADD_EMPLOYEE_SUCCESS = "ADD_IMPLOYEE_SUCCESS";
export const ADD_EMPLOYEE_ERROR = "ADD_IMPLOYEE_ERROR";

//Get employee
export const GET_EMPLOYEES = "GET_IMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "GET_IMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_ERROR = "GET_IMPLOYEES_ERROR";

//GET
export const getEmployees = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  return {
    type: GET_EMPLOYEES,
    page,
    limit,
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

//ADD
export const addEmployee = ({
  name,
  email,
  position,
  page,
}: {
  name: string;
  email: string;
  position: string;
  page: number;
}) => {
  return {
    type: ADD_EMPLOYEE,
    name,
    email,
    position,
    page,
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
