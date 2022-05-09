import moment from 'moment';

export const getTomorrowDate = () => {
  var currentDate = currentDate = moment(moment(), 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD');
  return currentDate;
};