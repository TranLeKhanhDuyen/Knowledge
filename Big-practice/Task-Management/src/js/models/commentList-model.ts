import API from '@services/comment';
import { createCommentModel } from '@models/comment-model';

export default class CommentListModel {
  private apiComment: API;

  constructor() {
    this.apiComment = new API();
  }

  async addComment(content: string, taskId: string): Promise<string> {
    const comment = createCommentModel(content, taskId);

    const apiResponse = await this.apiComment.addComment(comment);

    // Assuming data property holds the new task
    return apiResponse.data;
  }

  async getComment(commentId: string): Promise<string> {
    // Call the API to get task detail by ID
    const apiResponse = await this.apiComment.getComment(commentId);

    // Assuming data property holds the task detail
    return apiResponse.data;
  }

  async deleteComment(commentId: string): Promise<number | string> {
    const { status } = await this.apiComment.deleteComment(commentId);

    if (status !== 200) return;

    return status;
  }
}
