import date from "../utilities/date";

const CommentModel = (commentValue, taskId) => ({
  comment: commentValue,
  taskId,
  timeStamp: Date.now(),
  timeAgo: date.timeAgo(Date.now()),
});

export default CommentModel;
