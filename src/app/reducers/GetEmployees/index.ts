import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_ERROR,
  ADD_EMPLOYEE_SUCCESS,
} from "../../actions";

const initialState = {
  data: [],
  get: {
    loading: false,
    error: false,
  },
  add: {
    loading: false,
    error: false,
  },
};

export default function getEmployeesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, get: { loading: true, error: false } };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        data: action.data,
        get: { loading: false, error: false },
      };
    case GET_EMPLOYEES_ERROR:
      return { ...state, get: { loading: false, error: true } };
    case ADD_EMPLOYEE:
      return { ...state, add: { loading: true, error: false } };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        add: {
          loading: false,
          error: false,
        },
      };
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        add: {
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
}
