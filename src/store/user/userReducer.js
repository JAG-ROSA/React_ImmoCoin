import { AUTH_TOKEN } from "config";
import Cookies from "js-cookie";
import { LOGIN, LOGOUT } from "./userType";

const INITIAL_STATE = {
  id: Cookies.get(AUTH_TOKEN) || null,
  mail: null,
};

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        id: action.id,
        mail: action.email,
      };
    case LOGOUT:
      Cookies.remove(AUTH_TOKEN);
      return{
        id: null,
        mail: null,
      }
    default:
      return state;
  }
};

export default userReducer;