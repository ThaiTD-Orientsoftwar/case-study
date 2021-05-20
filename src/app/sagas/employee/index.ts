import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_ERROR,
  GET_EMPLOYEES_SUCCESS,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
} from "../../actions";
import {
  getEmployeesAPI,
  addEmployeeAPI,
} from "../../services/employeeServices";
import { GetEmployeesRequest } from "../../models/employee";
import { get, pullAll } from "lodash";
export function* getEmployees({
  type,
  ...payload
}: {
  type: string;
  payload: any;
}) {
  try {
    const {
      data: { data, total },
    } = yield call(getEmployeesAPI, {
      limit: get(payload, "limit", 5),
      page: get(payload, "page", 1),
    });
    yield put({ type: GET_EMPLOYEES_SUCCESS, data, total });
  } catch (error) {
    yield put({ type: GET_EMPLOYEES_ERROR });
  }
}

export function* addEmployee({
  type,
  ...payload
}: {
  type: string;
  payload: any;
}) {
  try {
    const {
      data: { data },
    } = yield call(addEmployeeAPI, {
      name: get(payload, "name", ""),
      email: get(payload, "email", ""),
      position: get(payload, "position", ""),
    });
    yield put({ type: ADD_EMPLOYEE_SUCCESS, data });
    yield put({ type: GET_EMPLOYEES, page: get(payload, "page", 1), limit: 5 });
  } catch (error) {
    yield put({ type: ADD_EMPLOYEE_ERROR });
  }
}

export function* employeeSagas() {
  yield takeLatest(GET_EMPLOYEES, getEmployees);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
}
