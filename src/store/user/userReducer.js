import { AUTH_TOKEN, USER_ID } from "config";
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
  userId: Cookies.get(USER_ID),
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case USER_REGISTRATION_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        isLogged: false,
        error: action.error,
      };
    case USER_REGISTRATION_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userId: action.userId,
      };
    case LOGOUT_SUCCESS:
      return {
        isLogged: false,
        userId: "",
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
