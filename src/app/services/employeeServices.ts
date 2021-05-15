import { GetEmployeesResponse } from "../models/GetEmployees";
import { AddEmployeeResponse } from "../models/AddEmployee";
import connector from "../utils/connector";

const getEmployeesAPI = async (): Promise<GetEmployeesResponse> => {
  return await connector.get("/employee");
};

const addEmployeeAPI = async (): Promise<AddEmployeeResponse> => {
  return await connector.post("/employee");
};

export { getEmployeesAPI, addEmployeeAPI };
