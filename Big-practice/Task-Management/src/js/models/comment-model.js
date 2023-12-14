import date from "../utilities/date";

const CommentModel = (commentValue, taskId) => ({
  comment: commentValue,
  taskId,
  // timeAgo: date.timeAgo(),
});

export default CommentModel;
