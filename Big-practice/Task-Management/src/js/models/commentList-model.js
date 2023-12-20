import API from "../services/comment";
import { ERROR_CODE, ERROR_MESSAGE } from "../constants/message";
import CommentModel from "../models/comment-model";

export default class CommentListModel {
  constructor() {
    this.apiComment = new API();
  }

  showError(errorMessage) {
    console.error(errorMessage);
  }

  async addComment(content, taskId) {
    const comment = CommentModel(content, taskId);

    try {
      const apiResponse = await this.apiComment.addComment(comment);

      // Assuming data property holds the new task
      return apiResponse.data;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.ADD_FAIL);
    }
  }

  async getComment(commentId) {
    try {
      // Call the API to get task detail by ID
      const apiResponse = await this.apiComment.getComment(commentId);

      // Assuming data property holds the task detail
      return apiResponse.data;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.SERVER_ERROR);
    }
  }

  async deleteComment(commentId) {
    try {
      const { status } = await this.apiComment.deleteComment(commentId);

      if (status !== 200) return this.showError(ERROR_CODE[status]);

      return status;
    } catch (error) {
      return this.showError(ERROR_MESSAGE.SERVER_ERROR);
    }
  }
}
