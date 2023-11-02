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


function diffTime(date, method = Math.floor, adverb = 'ago') {
  const convertDate = new Date(date);
  const day = 1000 * 60 * 60 * 24;
  const diff = method(Math.abs(convertDate - Date.now()) / day);

  switch (diff) {
    case 0:
      return 'Today';

    case 1:
      return `${diff} day ${adverb}`;

    case 2:
    case 3:
      return `${diff} days ${adverb}`;

    default:
      return date;
  }
}


function convertDateInput(dateStr) {
  const [month, day, year] = dateStr.split('/');
  const date = new Date(+year, +month - 1, +day + 1);
  const [dateValue] = date.toISOString().split('T');

  return dateValue;
}

function formatDate(date) {
  const [year, month, day] = date.split('-');

  return [month, day, year].join('/');
}

function timeElapse(timeStamp) {
  const minutes = 1000 * 60;
  const diffMins = Math.floor((Date.now() - (+timeStamp)) / minutes);
  const [dateString] = new Date(timeStamp).toISOString().split('T');
  const diffHours = Math.floor(diffMins / 60);

  switch (true) {
    case (diffMins === 0):
      return 'Just now';
    
    case (diffMins === 1): 
      return `${diffMins} min ago`;

    case (diffMins < 60):
      return `${diffMins} mins ago`;

    case (diffMins < (60 * 24)):
      
      return `${diffHours} ${(diffHours === 1) ? 'hour' : 'hours'} ago`;
  
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
