export const isAuthenticated = () => {
  if (localStorage.getItem('userInfo')) {
    return JSON.parse(localStorage.getItem('userInfo'));
  } else {
    return false;
  }
};