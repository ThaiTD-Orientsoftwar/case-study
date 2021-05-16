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

export function* getEmployees({
  type,
  payload,
}: {
  type: string;
  payload: any;
}) {
  try {
    const {
      data: { data },
    } = yield call(getEmployeesAPI);
    yield put({ type: GET_EMPLOYEES_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_EMPLOYEES_ERROR });
  }
}

export function* addEmployee({
  type,
  payload,
}: {
  type: string;
  payload: any;
}) {
  try {
    const {
      data: { data },
    } = yield call(addEmployeeAPI);
    yield put({ type: ADD_EMPLOYEE_SUCCESS, data });
    yield put({ type: GET_EMPLOYEES });
  } catch (error) {
    yield put({ type: ADD_EMPLOYEE_ERROR });
  }
}

export function* employeeSagas() {
  yield takeLatest(GET_EMPLOYEES, getEmployees);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
}
