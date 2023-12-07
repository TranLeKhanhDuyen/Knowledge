import { API_URL } from "../constants/url";
import APIHelper from "./helper";

export default class APITask {
  constructor(apiPath = "/tasks") {
    this.apiPath = apiPath;
  }
  /**
   * Adds a new task to the API
   *
   * @param {string} taskName - The name of the task to add
   * @
   * */
  
  async addTask(taskName) {
    const response = await fetch(
      `${API_URL}${this.apiPath}`,
      APIHelper.sendRequest("POST", taskName)
    );
    const result = await response.json();
    return {
      status: response.status,
      data: result,
    };
  }

  /**
   * Gets all tasks from the API
   *
   * @returns {Promise<{status: number, data: Array}>} - A promise that resolves to an object containing the status code and an array of tasks from the API response
   */

  async getTask() {
    const response = await fetch(`${API_URL}${this.apiPath}`);
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }
  /**
   * Finds a specific task by ID
   *
   * @param {number} id - The ID of the task to find
   * @returns {Promise<{status: number, data: Object}>} - A promise that resolves to an object containing the status code and the task data from the API response
   */

  async findTask(id) {
    const response = await fetch(`${API_URL}${this.apiPath}/${id}`);
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }

  async edit(id, updateData) {
    const response = await fetch(
      `${API_URL}${this.apiPath}/${id}`,
      APIHelper.sendRequest("PATCH", updateData)
    );

    return {
      status: response.status,
    };
  }

  async delete(id) {
    const response = await fetch(
      `${API_URL}${this.apiPath}/${id}`,
      APIHelper.sendRequest("DELETE")
    );

    return { status: response.status };
  }
}
