import API from '@services/comment';
import { CommentModel, createCommentModel } from '@models/comment-model';

export default class CommentListModel {
  private apiComment: API<CommentModel>;

  constructor() {
    this.apiComment = new API<CommentModel>();
  }

  async addComment(
    content: string,
    taskId: string
  ): Promise<CommentModel | undefined> {
    const comment = createCommentModel(content, taskId);

    const apiResponse = await this.apiComment.addComment(comment);

    // Assuming data property holds the new task
    return apiResponse.data;
  }

  async getComment(commentId: string): Promise<CommentModel | undefined> {
    // Call the API to get task detail by ID
    const apiResponse = await this.apiComment.getComment(commentId);

    // Assuming data property holds the task detail
    return apiResponse.data;
  }

  async deleteComment(commentId: string): Promise<number | undefined> {
    const { status } = await this.apiComment.deleteComment(commentId);

    if (status !== 200) return;

    return status;
  }
}
