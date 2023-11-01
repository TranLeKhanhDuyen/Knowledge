import { API_URL } from "../constants/url";

export default class APITask {
  async addTask(taskName) {
    const response = await fetch(
      API_URL.requestOptions("POST", taskName)
    );
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }
}
