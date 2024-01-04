export default class APIHelper {
  static async createRequest(
    url: string,
    method: string,
    data: any,
    contentType: string = 'application/json'
  ): Promise<{ response: Response; result?: any; error?: Error }> {
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

      const result = await response.json();

      return { response, result };
    } catch (error) {
      return { response: new Response(), error };
    }
  }
}
