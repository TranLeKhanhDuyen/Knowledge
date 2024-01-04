import { API_URL } from '../constants/url';
import APIHelper from './helper';

interface ApiResponse {
  status: number;
  message: string;
  data?: any;
}

const handleResponse = ({ status, message, data }: ApiResponse): ApiResponse => ({
  status,
  message,
  data,
});

export default class API {
  private apiPath: string;

  constructor(apiPath = '/tasks') {
    this.apiPath = apiPath;
  }

  async addTask(taskName: string): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(url, 'POST', taskName);

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async getTask(): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}`;
      const { response, result } = await APIHelper.createRequest(url, 'GET', null);

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async findTask(id: string): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response, result } = await APIHelper.createRequest(url, 'GET', null);

      return handleResponse(response, result);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async edit(id: string, updateData: any): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(url, 'PATCH', updateData);

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }

  async delete(id: string): Promise<ApiResponse> {
    try {
      const url = `${API_URL}${this.apiPath}/${id}`;
      const { response } = await APIHelper.createRequest(url, 'DELETE', null);

      return handleResponse(response);
    } catch (error) {
      return handleResponse(error);
    }
  }
}
