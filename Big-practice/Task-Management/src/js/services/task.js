import { API_TASKS } from "../constants/url";
import APIHelper from "./helper";

export default class APITask {
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

  async get() {
    const response = await fetch(API_TASKS);
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }

  async find(id) {
    const response = await fetch(`${API_TASKS}/${id}`);
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }
}
