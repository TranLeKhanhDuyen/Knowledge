import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/message";
import { API_URL } from "../constants/url";
import APIHelper from "./helper";

export default class API {
  constructor(apiPath = "/tasks") {
    this.apiPath = apiPath;
  }

  async addTask(taskName) {
    const url = `${API_URL}${this.apiPath}`;
    const { response, result } = await APIHelper.createRequest(
      url,
      "POST",
      taskName
    );

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.ADD_SUCCESS,
        data: result,
      };
    } else {
      const status = response.status;
      return {
        status,
        message: ERROR_MESSAGE.ADD_FAIL,
        data: null,
      };
    }
  }

  async getTask() {
    const url = `${API_URL}${this.apiPath}`;
    const { response, result } = await APIHelper.createRequest(url, "GET");

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.GET_SUCCESS,
        data: result,
      };
    } else {
      const status = response.status;
      return {
        status,
        message: ERROR_MESSAGE.LOAD_ERROR,
        data: null,
      };
    }
  }

  async findTask(id) {
    const url = `${API_URL}${this.apiPath}/${id}`;
    const { response, result } = await APIHelper.createRequest(url, "GET");

    if (response) {
      return {
        status: response.status,
        data: result,
      };
    } else {
      const status = response.status;
      return {
        status,
        message: ERROR_MESSAGE.SERVER_ERROR,
        data: null,
      };
    }
  }

  async edit(id, updateData) {
    const url = `${API_URL}${this.apiPath}/${id}`;
    const { response } = await APIHelper.createRequest(
      url,
      "PATCH",
      updateData
    );

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.UPDATE_SUCCESS,
      };
    } else {
      const status = response.status;
      return {
        status,
        message: ERROR_MESSAGE.SERVER_ERROR,
      };
    }
  }

  async delete(id) {
    const url = `${API_URL}${this.apiPath}/${id}`;
    const { response } = await APIHelper.createRequest(url, "DELETE");

    if (response) {
      return {
        status: response.status,
        message: SUCCESS_MESSAGE.DELETE_SUCCESS,
      };
    } else {
      const status = response.status;
      return {
        status,
        message: ERROR_MESSAGE.DELETE_FAIL,
      };
    }
  }
}
