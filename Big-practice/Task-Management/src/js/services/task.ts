import { API_URL } from '@constants/url';
import APIHelper from '@services/helper';
import { ApiResponse, handleResponse } from '@services/common';

export default class API {
  private apiPath: string;
  
  constructor(apiPath = '/tasks') {
    this.apiPath = apiPath;
  }

  async addTask(taskName: string): Promise<ApiResponse<string>> {
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

  async findTask(id: string): Promise<ApiResponse<string>> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
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

  async edit(id: string, updateData: string): Promise<ApiResponse<string>> {
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

  async delete(id: string): Promise<ApiResponse<string>> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE', {});

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }
}
