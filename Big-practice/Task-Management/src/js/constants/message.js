/**
 * Message for alert the error while fetching or rendering.
 */
export const ERROR_MESSAGE = {
  LOAD_ERROR: "Error when loading data",
  SERVER_ERROR: "Server Error! Please try again later",
  ADD_FAIL: "Task is empty",
  COMMENT_EMPTY: "Comment cannot be empty",
  TASK_EMPTY: "Task cannot be empty",
  DELETE_FAIL: "Delete is fail",
  INTERNET_ERROR: "No Internet Connection",
};

/**
 * Message for alert if the action be done successfully.
 */
export const SUCCESS_MESSAGE = {
  ADD_SUCCESS: "Add is successfully",
  DELETE_SUCCESS: "Delete is successfully",
  GET_SUCCESS: "Get is successfully",
  UPDATE_SUCCESS: "Update is successfully",
};

export const ERROR_CODE = {
  // 4xx Client Error
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  408: "Request Timeout",
  429: "Too Many Requests",
  // 5xx Server Error
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};
