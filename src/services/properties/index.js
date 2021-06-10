import API from "../api";

export default class PropertiesManager {
  static async indexProperties() {
    const response = await API.get("/properties");
    return response.data;
  }

  static async showProperties(id) {
    const response = await API.get(`/properties/${id}`);
    return response.data;
  }

  static async createProperties(title, description, price, category, location) {
    const response = await API.post("/properties", {
      title,
      description,
      price,
      category,
      location,
    });
    return response.data;
  }

  static async updateProperties(title, description, price, category, location, id) {
    const response = await API.put(`/properties/${id}`, {
      title,
      description,
      price,
      category,
      location,
    });
    return response.data;
  }

  static async deleteProperties(id) {
    await API.delete(`/properties/${id}`);
  }
}
