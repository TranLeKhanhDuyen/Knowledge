const getCurrentDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const getDueDate = () => {
  const date = new Date();
  return `${date.getMonth()  + 1}/${date.getDate()}/${date.getFullYear()}`;
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

function convertDateInput(dateStr) {
  const [month, day, year] = dateStr.split("/");

  // Subtract month by 1 because JavaScript counts months from 0 to 11
  // Add day by 1 because the timezone difference
  const date = new Date(+year, +month - 1, +day + 1);
  const [dateValue] = date.toISOString().split("T");

  return dateValue;
}

function formatDate(date) {
  const [year, month, day] = date.split("-");

  return [month, day, year].join("/");
}

function timeElapse(timeStamp) {
  const minutes = 1000 * 60;
  const diffMins = Math.floor((Date.now() - +timeStamp) / minutes);
  const [dateString] = new Date(timeStamp).toISOString().split("T");
  const diffHours = Math.floor(diffMins / 60);

  switch (true) {
    case diffMins === 0:
      return "Just now";

    case diffMins === 1:
      return `${diffMins} min ago`;

    case diffMins < 60:
      return `${diffMins} mins ago`;

    case diffMins < 60 * 24:
      return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;

    default:
      return formatDate(dateString);
  }
}

export default {
  getCurrentDate,
  getDueDate,
  diffTime,
  convertDateInput,
  formatDate,
  timeElapse,
};
