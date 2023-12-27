import API from '../services/comment'
import CommentModel from '../models/comment-model'

export default class CommentListModel {
  constructor() {
    this.apiComment = new API()
  }

  showError(errorMessage) {
    console.error(errorMessage)
  }

  async addComment(content, taskId) {
    const comment = CommentModel(content, taskId)

    const apiResponse = await this.apiComment.addComment(comment)

    // Assuming data property holds the new task
    return apiResponse.data
  }

  async getComment(commentId) {
    // Call the API to get task detail by ID
    const apiResponse = await this.apiComment.getComment(commentId)

    // Assuming data property holds the task detail
    return apiResponse.data
  }

  async deleteComment(commentId) {
    const { status } = await this.apiComment.deleteComment(commentId)

    if (status !== 200) return

    return status
  }
}
