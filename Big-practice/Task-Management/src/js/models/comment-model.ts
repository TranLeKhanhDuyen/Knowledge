import date from '../utilities/date';

// Defined data type
interface CommentModel {
  comment: string;
  taskId: string;
  timeStamp: number;
  timeAgo: string;
}

const createCommentModel = (commentValue: string, taskId: string): CommentModel => ({
  comment: commentValue,
  taskId,
  timeStamp: Date.now(),
  timeAgo: date.timeAgo(Date.now())
});

export default createCommentModel;
