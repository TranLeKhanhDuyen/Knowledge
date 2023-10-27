import { API_URL } from "../constants/url";
export default class APIService {
  /**
   * Create an instance of the APIService.
   * @param {string} path - The base API path.
   */

  constructor(path) {
    this.apiUrl = API_URL;
    this.path = path;
  }

  /**
   * Get a list of items from the API.
   * @returns {Promise} A promise that resolves with the API response.
   */
  getList = () => this.sendRequest(null, "get");

  /**
   * Get the details of an item from the API.
   * @param {string} id - The ID of the item to retrieve.
   * @returns {Promise} A promise that resolves with the API response.
   */
  getDescription = (id) => this.sendRequest(id, "get");

  /**
   * Send an HTTP request to the API.
   * @param {string|null} id - The ID of the item for detail requests, or null for list requests.
   * @param {string} method - The HTTP method (e.g., "get", "post").
   * @returns {Promise} A promise that resolves with the API response.
   */
  sendRequest = async (id, method, body) => {
    
  }
}
