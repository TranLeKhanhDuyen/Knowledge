import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/message";
import { API_URL } from "../constants/url";
import APIHelper from "./helper";

export default class API {
  constructor(apiPath = "/comments") {
    this.apiPath = apiPath;
  }

  async addComment(comment) {
    try {
      const response = await fetch(
        `${API_URL}${this.apiPath}`,
        APIHelper.sendRequest("POST", comment)
      );
      const result = await response.json();

      return {
        status: response.status,
        message: SUCCESS_MESSAGE.ADD_SUCCESS,
        data: result,
      };
    } catch (error) {
      return {
        status: 500, // Internal Server Error
        message: ERROR_MESSAGE.ADD_FAIL,
        data: null,
      };
    }
  }

  async getComment(taskId) {
    try {
      const response = await fetch(
        `${API_URL}${this.apiPath}?taskId=${taskId}`
      );
      const result = await response.json();

      return {
        status: response.status,
        message: SUCCESS_MESSAGE.GET_SUCCESS,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        message: ERROR_MESSAGE.LOAD_ERROR,
        data: null,
      };
    }
  }

  async deleteComment(commentId) {
    try {
      const response = await fetch(
        `${API_URL}${this.apiPath}/${commentId}`,
        APIHelper.sendRequest("DELETE")
      );

      return {
        status: response.status,
        message: SUCCESS_MESSAGE.DELETE_SUCCESS,
      };
    } catch (error) {
      return {
        status: 500,
        message: ERROR_MESSAGE.DELETE_FAIL,
      };
    }
  }
}
