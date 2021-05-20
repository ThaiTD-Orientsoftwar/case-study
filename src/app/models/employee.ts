export interface Employee {
  name: string;
  email: string;
  position: string;
}

interface GetEmployeesRequest {
  page: number;
  limit: number;
}

interface GetEmployeesResponse {}

interface AddEmployeeRequest {
  name: string;
  email: string;
  position: string;
}

interface AddEmployeeResponse {}

export type {
  GetEmployeesRequest,
  GetEmployeesResponse,
  AddEmployeeRequest,
  AddEmployeeResponse,
};
