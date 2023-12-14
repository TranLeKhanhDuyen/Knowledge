import { API_URL } from "../constants/url";
import APIHelper from "./helper";

export default class API {
  constructor(apiPath = "/comments") {
    this.apiPath = apiPath;
  }

  async addComment(comment) {
    const response = await fetch(
      `${API_URL}${this.apiPath}`,
      APIHelper.sendRequest("POST", comment)
    );
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }

  async getComment(taskId) {
    const response = await fetch(`${API_URL}${this.apiPath}?taskId=${taskId}`);
    const result = await response.json();

    return {
      status: response.status,
      data: result,
    };
  }

  async deleteComment(commentId) {
    const response = await fetch(
      `${API_URL}${this.apiPath}/${commentId}`,
      APIHelper.sendRequest("DELETE")
    );

    return { status: response.status };
  }
}
