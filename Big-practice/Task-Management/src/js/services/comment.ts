import { API_URL } from '@constants/url';
import APIHelper from '@services/helper';
import { ApiResponse, handleResponse } from '@services/common';

export default class API {
  private apiPath: string;
  private handleResponse(
    response: Response,
    result?: string
  ): ApiResponse<string> {
    return handleResponse(response, result);
  }

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

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
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

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
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

      return this.handleResponse(response);
    } catch (error) {
      return this.handleResponse(error);
    }
  }
}
