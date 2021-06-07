import API from "../api";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "config";

export default class UserManager {
  static async registerUser(email, password) {
    const response = await API.post("/users", { user: { email, password } });
    if (!response.headers.authorization) {
      throw new Error(
        `Erreur lors de l'enregistrement : ${response.data.message}`
      );
    }
    Cookies.set(AUTH_TOKEN, response.headers.authorization);
    return response.headers.authorization;
  }

  static async loginUser(email, password) {
    const response = await API.post("/users/sign_in", {
      user: { email, password },
    });
    if (!response.headers.authorization) {
      throw new Error(`Erreur lors de la connexion : ${response.data.message}`);
    }
    Cookies.set(AUTH_TOKEN, response.headers.authorization);
    return response.headers.authorization;
  }

  static async logoutUser() {
    const response = await API.delete("/users/sign_out");
    if (response.status !== 200) {
      throw new Error(
        `Erreur lors de la déconnexion : ${response.data.message}`
      );
    }
    Cookies.remove(AUTH_TOKEN);
  }

  static async getProfile() {
    const response = await API.post("/users/me");
    if (response.status !== 200) {
      throw new Error(
        `Erreur lors du téléchargement du profil : ${response.data.message}`
      );
    }
    return response.data;
  }

  static async updateProfile(user) {
    const response = await API.put("/users", user);
    if (response.status !== 200) {
      throw new Error(
        `Erreur lors de la mise à jour : ${response.data.message}`
      );
    }
    return response.data;
  }
}
