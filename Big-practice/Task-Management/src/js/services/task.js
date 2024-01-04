import { API_URL } from '../constants/url';
import APIHelper from './helper';

const handleResponse = ({ status, message }, data = null) => ({
  status,
  message,
  data
});

export default class API {
  constructor(apiPath = '/tasks') {
    this.apiPath = apiPath;
  }

  async addTask(taskName) {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(
        url,
        'POST',
        taskName
      );

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async getTask() {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(url, 'GET');

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async findTask(id) {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response, result } = await APIHelper.createRequest(url, 'GET');

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async edit(id, updateData) {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(
        url,
        'PATCH',
        updateData
      );

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async delete(id) {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE');

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }
}
