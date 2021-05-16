export interface Employee {
  name: string;
  email: string;
  position: string;
}

interface GetEmployeesRequest {}

interface GetEmployeesResponse {}

interface AddEmployeeRequest {}

interface AddEmployeeResponse {}

export type {
  GetEmployeesRequest,
  GetEmployeesResponse,
  AddEmployeeRequest,
  AddEmployeeResponse,
};
