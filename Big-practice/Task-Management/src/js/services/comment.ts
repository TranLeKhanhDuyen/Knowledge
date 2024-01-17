import { API_URL } from '../constants/url';
import APIHelper from './helper';

interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export default class API<T> {
  private apiPath: string;

  constructor(apiPath: string = '/comments') {
    this.apiPath = apiPath;
  }

  async addComment(comment: T): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest<T>(
        url,
        'POST',
        comment
      );

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  async getComment(taskId: string, data: T): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}?taskId=${taskId}`;
      const { response, result } = await APIHelper.createRequest<T>(
        url,
        'GET',
        data
      );

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  async deleteComment(commentId: string, data: T): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}/${commentId}`;
      const { response } = await APIHelper.createRequest<T>(
        url,
        'DELETE',
        data
      );

      return this.handleResponse(response);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  private handleResponse(response: Response, result?: T): ApiResponse<T> {
    const { status } = response;
    const message = response.ok
      ? 'Success'
      : `Request failed with status ${status}`;
    return { status, message, data: result };
  }
}
