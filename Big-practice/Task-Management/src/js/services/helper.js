export default class APIHelper {
  static async createRequest(url, method, data, contentType = "application/json") {
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": contentType,
        },
      });
      const result = await response.json();

      return { response, result };
    } catch (error) {
      return { error };
    }
  }
}
