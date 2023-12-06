export default class APIHelper {
  static sendRequest(method, data, contentType = "application/json") {
    return {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": contentType,
      },
    };
  }
}
