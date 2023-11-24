import { API_TASKS } from "../constants/url";
import APIHelper from "./helper";

export default class APITask {
  /**
   * Adds a new task to the API
   *
   * @param {string} taskName - The name of the task to add
   * @
   * */
  async addTask(taskName) {
    const response = await fetch(
      API_TASKS,
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
    const response = await fetch(API_TASKS);
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
    const response = await fetch(`${API_TASKS}/${id}`);
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }

  async edit(id, updateData) {
    const response = await fetch(
      `${API_TASKS}/${id}`,
      APIHelper.sendRequest("PATCH", updateData)
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const result = await response.json();
    return {
      status: response.status,
      data: result,
    };
  }
  async delete(id) {
    const response = await fetch(
      `${API_TASKS}/${id}`,
      APIHelper.sendRequest("DELETE")
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const result = await response.json();
    return {
      status: response.status,
      data: result,
    };
  }
  catch(error) {
    console.error("Error editing task:", error);
    throw new Error("Error editing task");
  }
}
