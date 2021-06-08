import { AUTH_TOKEN } from "config";
import Cookies from "js-cookie";
import {
  USER_REGISTRATION_FAILED,
  USER_REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "./userType";

const INITIAL_STATE = {
  isLogged: !!Cookies.get(AUTH_TOKEN),
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTRATION_FAILED || LOGIN_FAILED:
      return {
        ...state,
        isLogged: false,
        error: action.error,
      };
    case USER_REGISTRATION_SUCCESS || LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      };

    case LOGOUT_SUCCESS:
      return {
        isLogged: false,
      };
    case LOGOUT_FAILED:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducer;
