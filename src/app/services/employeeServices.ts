import { GetEmployeesResponse, AddEmployeeResponse } from "../models/employee";
import connector from "../utils/connector";
import { api } from "../constants";

const getEmployeesAPI = async (): Promise<GetEmployeesResponse> => {
  return await connector.get(api.employee.index);
};

const addEmployeeAPI = async (): Promise<AddEmployeeResponse> => {
  return await connector.post(api.employee.index);
};

export { getEmployeesAPI, addEmployeeAPI };
