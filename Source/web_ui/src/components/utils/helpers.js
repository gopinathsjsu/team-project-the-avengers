import moment from 'moment';

export const getTomorrowDate = () => {
  var currentDate = moment(moment(), 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD');
  return currentDate;
};

export const isAfterToday = (date) => {
  var today = moment().format('YYYY-MM-DD');
  var theDate = moment(date);
  const days = theDate.diff(today, 'days');
  if (days > 0) {
    return true;
  } else {
    return false;
  }
};