export const getTomorrowDate = () => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  currentDate = currentDate.toISOString().split('T')[0];
  return currentDate;
};