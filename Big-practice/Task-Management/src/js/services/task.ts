import { API_URL } from '../constants/url';
import APIHelper from './helper';

interface ApiResponse {
  status: number;
  message: string;
  data?: any;
}

export default class API {
  private apiPath: string;

  constructor(apiPath = '/tasks') {
    this.apiPath = apiPath;
  }

  async addTask(taskName: string): Promise<ApiResponse> {
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
  
  async getTask(id: number) {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(
        url,
        'GET',
        id
      );

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  async findTask(id: number): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response, result } = await APIHelper.createRequest(url, 'GET', {});

      return this.handleResponse(response, result);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  async edit(id: number, updateData: any): Promise<ApiResponse> {
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

  async delete(id: string): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE', {});

      return this.handleResponse(response);
    } catch (error) {
      return this.handleResponse(error);
    }
  }

  private handleResponse(response: Response, result?: any): ApiResponse {
    const { status } = response;
    const message = response.ok
      ? 'Success'
      : `Request failed with status ${status}`;
    return { status, message, data: result };
  }
}
