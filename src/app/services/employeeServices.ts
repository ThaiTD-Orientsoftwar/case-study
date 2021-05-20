import {
  GetEmployeesResponse,
  AddEmployeeResponse,
  GetEmployeesRequest,
  AddEmployeeRequest,
} from "../models/employee";
import connector from "../utils/connector";
import { api } from "../constants";

const getEmployeesAPI = async (
  req: GetEmployeesRequest
): Promise<GetEmployeesResponse> => {
  const { limit, page } = req;
  return await connector.get(api.employee.index, {
    params: {
      page,
      limit,
      sortBy: "createdAt",
      order: "desc",
    },
  });
};

const addEmployeeAPI = async (
  req: AddEmployeeRequest
): Promise<AddEmployeeResponse> => {
  return await connector.post(api.employee.index, {
    name: req.name,
    email: req.email,
    position: req.position,
  });
};

export { getEmployeesAPI, addEmployeeAPI };
