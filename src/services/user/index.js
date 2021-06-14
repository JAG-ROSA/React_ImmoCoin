import API from "../api";
import Cookies from "js-cookie";
import { AUTH_TOKEN, USER_ID } from "config";
import store from "store/store";
import { loginFailed, loginSuccess } from "store";

export default class UserManager {
  static async registerUser(email, password) {
    const response = await API.post("/users", { user: { email, password } });
    Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7 });
    Cookies.set(USER_ID, response.data.id, { expires: 7 });
    return response.data;
  }

  static async loginUser(email, password) {
    try {
      const response = await API.post("/users/sign_in", {
        user: { email, password },
      });
      store.dispatch(loginSuccess(response.data.id));
      Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7 });
      Cookies.set(USER_ID, response.data.id, { expires: 7 });
      /* return response.data; */
    } catch (error) {
      store.dispatch(loginFailed(error.message));
    }
  }

  static async logoutUser() {
    await API.delete("/users/sign_out");
    Cookies.remove(AUTH_TOKEN);
    Cookies.remove(USER_ID);
  }

  static async getProfile() {
    const response = await API.get(`/users/${Cookies.get(USER_ID)}`);
    return response.data;
  }

  static async updateProfile(user) {
    const response = await API.put(`/users/${Cookies.get(USER_ID)}`, user);
    return response.data;
  }

  static async forgotPassword(user) {
    const response = await API.post(`/password/forgot`, user);
    return response.data;
  }

  static async resetPassword(user) {
    const response = await API.post(`/password/reset`, user);
    return response.data;
  }
}
