import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actions";

export const initialState = {
  isLoggedIn: false,
  isAuthenticated: false,
  user: null,
  isFetching: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        isLoggedIn: true,
        isAuthenticated: true,
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case LOGOUT:
      // Remove user data from localStorage
      localStorage.removeItem("user");

      return {
        ...state,
        isLoggedIn: false,
        isAuthenticated: false,
        user: null,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};

export default { authReducer, initialState };
