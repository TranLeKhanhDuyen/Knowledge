import { API_URL } from '@constants/url';
import APIHelper from '@services/helper';
import { ApiResponse, handleResponse } from '@services/common';

export default class API {
  private apiPath: string;

  constructor(apiPath: string = '/comments') {
    this.apiPath = apiPath;
  }

  async addComment(comment: string): Promise<ApiResponse<string>> {
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

  async getComment(taskId: string): Promise<ApiResponse<string>> {
    try {
      const url = `${API_URL}${this.apiPath}?taskId=${taskId}`;
      const { response, result } = await APIHelper.createRequest(
        url,
        'GET',
        undefined
      );

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async deleteComment(commentId: string): Promise<ApiResponse<string>> {
    try {
      const url = `${API_URL}${this.apiPath}/${commentId}`;
      const { response } = await APIHelper.createRequest(
        url,
        'DELETE',
        undefined
      );

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }
}
