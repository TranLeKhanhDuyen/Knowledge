import { API_URL } from "../constants/url";

/**
 * A class for making API requests.
 */
export default class APIService {
  /**
   * Creates an instance of APIService.
   * @param {string} path - The API endpoint path.
   */
  constructor(path) {
    this.apiUrl = API_URL;
    this.path = path;
  }

  /**
   * Sends a GET request to retrieve a list of items.
   * @returns {Promise} A promise that resolves to the response data.
   */
  getList = () => this.sendRequest(null, "get");

  /**
   * Sends a GET request to retrieve the description of a specific item.
   * @param {number} id - The ID of the item to retrieve.
   * @returns {Promise} A promise that resolves to the response data.
   */
  getDescription = (id) => this.sendRequest(id, "get");

  /**
   * Sends a HTTP request to the API.
   * @param {number | null} id - The ID of the item (if applicable).
   * @param {string} method - The HTTP method for the request (e.g., "GET", "POST").
   * @param {*} body - The request payload (if applicable).
   * @returns {Promise} A promise that resolves to the response data.
   */
  sendRequest = async (id, method, body) => {
    const url = `${this.apiUrl}/${this.path}/${id}`;
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Error while sending request");
    }
  };
}
