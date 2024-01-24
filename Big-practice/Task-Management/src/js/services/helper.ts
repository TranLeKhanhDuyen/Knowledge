export default class APIHelper {
  static async createRequest<T>(
    url: string,
    method: string,
    data: T,
    contentType: string = 'application/json'
  ): Promise<{ response: Response; result?: T; error?: Error }> {
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': contentType
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json() as T;

      return { response, result };
    } catch (error) {
      // If there is an error, response is set to new Response() and error is returned.
      return { response: new Response(), error };
    }
  }
}
