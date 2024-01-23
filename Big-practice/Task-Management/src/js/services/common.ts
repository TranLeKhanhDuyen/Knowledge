export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export const handleResponse = (
  response: Response,
  result?: string
): ApiResponse<string> => {
  const { status } = response;
  const message = response.ok
    ? 'Success'
    : `Request failed with status ${status}`;
  return { status, message, data: result };
};
