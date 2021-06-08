import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  USER_REGISTRATION_FAILED,
  USER_REGISTRATION_SUCCESS,
} from "./userType";

export const registrationSuccess = () => ({
  type: USER_REGISTRATION_SUCCESS,
});

export const registrationFailed = (error) => ({
  type: USER_REGISTRATION_FAILED,
  error,
});

export const loginSuccess = (id) => ({
  type: LOGIN_SUCCESS,
  userId: id,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailed = (error) => ({
  type: LOGOUT_FAILED,
  error,
});
