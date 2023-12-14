const getCurrentDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const getDueDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const diffTime = (date, method = Math.floor, adverb = "ago", unit = "day") => {
  const convertDate = new Date(date);
  const unitMillis = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000,
  };
  const diff = method(Math.abs(convertDate - Date.now()) / unitMillis[unit]);

  switch (diff) {
    case 0:
      return "Today";

    case 1:
      return `${diff} ${unit} ${adverb}`;

    default:
      return `${diff} ${unit}s ${adverb}`;
  }
};

const convertDateInput = (dateStr) => {
  const [month, day, year] = dateStr.split("/");
  const date = new Date(+year, +month - 1, +day + 1);
  const [dateValue] = date.toISOString().split("T");

  return dateValue;
};

const formatDate = (date) => {
  const [year, month, day] = date.split("-");

  return [month, day, year].join("/");
};

export default {
  getCurrentDate,
  getDueDate,
  diffTime,
  convertDateInput,
  formatDate
};
