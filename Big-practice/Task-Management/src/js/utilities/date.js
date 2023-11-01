const getCurrentDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const getDueDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 2);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const currentDate = getCurrentDate();
const dueDate = getDueDate();

console.log(`Current Date: ${currentDate}`);
console.log(`Due Date: ${dueDate}`);

export default {
  getCurrentDate,
  getDueDate,
};
