import { all } from "redux-saga/effects";
import { employeeSagas } from "./employee";

export default function* rootSaga() {
  yield all([employeeSagas()]);
}
