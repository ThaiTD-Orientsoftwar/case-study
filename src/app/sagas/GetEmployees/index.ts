import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_ERROR,
  GET_EMPLOYEES_SUCCESS,
} from "../../actions";
import { getEmployeesAPI } from "../../services/employeeServices";

export function* getEmployees({
  type,
  payload,
}: {
  type: string;
  payload: any;
}) {
  try {
    const { data: { data } } = yield call(getEmployeesAPI);
    yield put({ type: GET_EMPLOYEES_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_EMPLOYEES_ERROR });
  }
}

export function* employeeSagas() {
  yield takeLatest(GET_EMPLOYEES, getEmployees);
}
