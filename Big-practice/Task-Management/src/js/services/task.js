import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/message";
import { API_URL } from "../constants/url";
import APIHelper from "./helper";

export default class API {
  constructor(apiPath = "/tasks") {
    this.apiPath = apiPath;
  }

  async addTask(taskName) {
    try {
      // Check internet
      if (!navigator.onLine) {
        return {
          status: 0, // value when no internet connection
          message: ERROR_MESSAGE.INTERNET_ERROR,
          data: null,
        };
      }

      const response = await fetch(
        `${API_URL}${this.apiPath}`,
        APIHelper.sendRequest("POST", taskName)
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

  async getTask() {
    try {
      const response = await fetch(`${API_URL}${this.apiPath}`);
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

  async findTask(id) {
    try {
      const response = await fetch(`${API_URL}${this.apiPath}/${id}`);
      const result = await response.json();

      return {
        status: response.status,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        message: ERROR_MESSAGE.SERVER_ERROR,
        data: null,
      };
    }
  }

  async edit(id, updateData) {
    try {
      const response = await fetch(
        `${API_URL}${this.apiPath}/${id}`,
        APIHelper.sendRequest("PATCH", updateData)
      );

      return {
        status: response.status,
        message: SUCCESS_MESSAGE.UPDATE_SUCCESS,
      };
    } catch (error) {
      return {
        status: 500,
        message: ERROR_MESSAGE.SERVER_ERROR,
      };
    }
  }

  async delete(id) {
    try {
      const response = await fetch(
        `${API_URL}${this.apiPath}/${id}`,
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
