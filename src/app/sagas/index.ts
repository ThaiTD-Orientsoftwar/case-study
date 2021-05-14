import { all } from "redux-saga/effects";
import { employeeSagas } from "./GetEmployees";

export default function* rootSaga() {
  yield all([employeeSagas()]);
}
