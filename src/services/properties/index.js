import API from "../api";
/* import Cookies from "js-cookie";
import { AUTH_TOKEN, USER_ID } from "config"; */

export default class PropertiesManager {
  static async indexProperties() {
    const response = await API.get("/properties");
    return response.data;
  }
}
