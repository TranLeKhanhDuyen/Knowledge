import { API_URL } from '../constants/url';
import APIHelper from './helper';

const handleResponse = ({ status, message }, data = null) => ({
  status,
  message,
  data,
});

export default class API {
  private apiPath: string;

  constructor(apiPath: string = '/comments') {
    this.apiPath = apiPath;
  }

  async addComment(comment: any): Promise<ApiResponse> {
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

  async getComment(taskId: string): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}?taskId=${taskId}`;
      const { response, result } = await APIHelper.createRequest(
        url,
        'GET',
        null
      );

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async deleteComment(commentId: string): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}/${commentId}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE', null);

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }
}
