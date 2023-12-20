import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/message";
import { API_URL } from "../constants/url";
import APIHelper from "./helper";

export default class API {
  constructor(apiPath = "/comments") {
    this.apiPath = apiPath;
  }

  async addComment(comment) {
    const url = `${API_URL}${this.apiPath}`;
    const { response, result } = await APIHelper.createRequest(
      url,
      "POST",
      comment
    );

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.ADD_SUCCESS,
        data: result,
      };
    } else {
      return {
        status: response.status,
        message: ERROR_MESSAGE.ADD_FAIL,
        data: null,
      };
    }
  }

  async getComment(taskId) {
    const url = `${API_URL}${this.apiPath}?taskId=${taskId}`;
    const { response, result } = await APIHelper.createRequest(url, "GET");

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.GET_SUCCESS,
        data: result,
      };
    } else {
      return {
        status: response.status,
        message: ERROR_MESSAGE.LOAD_ERROR,
        data: null,
      };
    }
  }

  async deleteComment(commentId) {
    const url = `${API_URL}${this.apiPath}/${commentId}`;
    const { response } = await APIHelper.createRequest(url, "DELETE");

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.DELETE_SUCCESS,
      };
    } else {
      return {
        status: response.status,
        message: ERROR_MESSAGE.DELETE_FAIL,
      };
    }
  }
}
