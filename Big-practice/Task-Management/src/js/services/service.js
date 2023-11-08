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
  getDetail = (id) => this.sendRequest(id, "get");

  /**
   * Sends a POST request to add a new Item.
   *
   * @param {*} data - The data for the new Item.
   * @returns {Promise} A promise that resolves to the response data.
   */
  addItem = (data) => this.sendRequest(null, "post", data);

  /**
   * Sends a POST request to edit a specific Item.
   *
   * @param {number} id - The ID of the Item to edit.
   * @param {*} data - The data to update the Item.
   * @returns {Promise} A promise that resolves to the response data.
   */
  editItem = (id, data) => this.sendRequest(id, "post", data);

  /**
   * Sends a DELETE request to delete a specific Item.
   *
   * @param {number} id - The ID of the Item to delete.
   * @returns {Promise} A promise that resolves to the response data.
   */
  deleteItem = (id) => this.sendRequest(id, "delete");

  /**
   * Sends a HTTP request to the API.
   * @param {number | null} id - The ID of the item (if applicable).
   * @param {string} method - The HTTP method for the request (e.g., "GET", "POST").
   * @param {*} body - The request payload (if applicable).
   * @returns {Promise} A promise that resolves to the response data.
   */
  sendRequest = async (id, method, body) => {
    const path = id ? `/${id}` : "";
    const url = this.apiUrl + this.path + path;
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
