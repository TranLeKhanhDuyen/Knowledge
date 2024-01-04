import { API_URL } from '../constants/url';
import APIHelper from './helper';

const handleResponse = ({ status, message }, data = null) => ({
  status,
  message,
  data,
});

export default class API {
  constructor(apiPath = '/comments') {
    this.apiPath = apiPath;
  }

  async addComment(comment) {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(
        url,
        'POST',
        comment
      );

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async getComment(taskId) {
    try {
      const url = `${API_URL}${this.apiPath}?taskId=${taskId}`;
      const { response, result } = await APIHelper.createRequest(url, 'GET');

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async deleteComment(commentId) {
    try {
      const url = `${API_URL}${this.apiPath}/${commentId}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE');

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }
}
