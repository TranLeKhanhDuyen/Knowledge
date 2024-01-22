import { API_URL } from '@constants/url';
import APIHelper from '@services/helper';

interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export default class API<T> {
  private apiPath: string;

  constructor(apiPath = '/tasks') {
    this.apiPath = apiPath;
  }

  async addTask(taskName: T): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(
        url,
        'POST',
        taskName
      );

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
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

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  async findTask(id: string): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
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

  async edit(id: string, updateData: T): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(
        url,
        'PATCH',
        updateData
      );

      return this.handleResponse(response);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  async delete(id: string): Promise<ApiResponse<T>> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE', {});

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
