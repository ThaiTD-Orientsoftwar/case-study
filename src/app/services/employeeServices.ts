import { GetEmployeesResponse } from "../models/GetEmployees";
import connector from "../utils/connector";

export const getEmployeesAPI = async (): Promise<GetEmployeesResponse> => {
  return await connector.get("/employee");
};
