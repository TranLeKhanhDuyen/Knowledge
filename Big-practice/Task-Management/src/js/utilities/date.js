const getCurrentDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const getDueDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1 + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const diffTime = (date, method = Math.floor, adverb = "ago") => {
  const convertDate = new Date(date);
  const day = 1000 * 60 * 60 * 24;
  const diff = method(Math.abs(convertDate - Date.now()) / day);

  switch (diff) {
    case 0:
      return "Today";

    case 1:
      return `${diff} day ${adverb}`;

    case 2:
    case 3:
      return `${diff} days ${adverb}`;

    default:
      return date;
  }
};

export default {
  getCurrentDate,
  getDueDate,
  diffTime
};
