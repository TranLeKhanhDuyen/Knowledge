import date from '@utilities/date';

// Defined data type
export type CommentModel = {
  comment: string;
  taskId: string;
  timeStamp: number;
  timeAgo: string;
  id: string;
};

export const createCommentModel = (
  commentValue: string,
  taskId: string
): CommentModel => ({
  comment: commentValue,
  taskId,
  timeStamp: Date.now(),
  timeAgo: date.timeAgo(Date.now()),
  id: ''
});
