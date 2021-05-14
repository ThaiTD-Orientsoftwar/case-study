import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
} from "../../actions";

const initialState = {};

export default function getEmployeesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, loading: true };
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case GET_EMPLOYEES_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
