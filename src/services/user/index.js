import API from "../api";
import Cookies from "js-cookie";
import { AUTH_TOKEN, USER_ID } from "config";

export default class UserManager {
  static async registerUser(email, password) {
    const response = await API.post("/users", { user: { email, password } });
    Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7 });
    Cookies.set(USER_ID, response.data.id, { expires: 7 });
    return response.data;
  }

  static async loginUser(email, password) {
    const response = await API.post("/users/sign_in", {
      user: { email, password },
    });
    Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7 });
    Cookies.set(USER_ID, response.data.id, { expires: 7 });
    return response.data;
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
}
