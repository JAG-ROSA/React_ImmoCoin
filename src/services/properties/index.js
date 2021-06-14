import API from "../api";

export default class PropertiesManager {
  static async indexProperties() {
    const response = await API.get("/properties");
    return response.data;
  }

  /**
   * Get property data from API
   * @param {number} id the ID of the desired property
   * @returns the property corresponding to the ID
   */
  static async getProperty(id) {
    const response = await API.get(`/properties/${id}`);
    return response.data;
  }

  static async createProperty(title, description, price, category, location) {
    const response = await API.post("/properties", {
      title,
      description,
      price,
      category,
      location,
    });
    return response.data;
  }

  static async updateProperty(
    title,
    description,
    price,
    category,
    location,
    id
  ) {
    const response = await API.put(`/properties/${id}`, {
      title,
      description,
      price,
      category,
      location,
    });
    return response.data;
  }

  static async deleteProperty(id) {
    await API.delete(`/properties/${id}`);
  }
}
