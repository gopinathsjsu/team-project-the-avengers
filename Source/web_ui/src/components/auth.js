export const isAuthenticated = () => {
  if (localStorage.getItem('userInfo')) {
    return JSON.parse(localStorage.getItem('userInfo'));
  } else {
    return false;
  }
};

export const isAdmin = () => {
  if (localStorage.getItem('userInfo')) {
    const { userRole } = JSON.parse(localStorage.getItem('userInfo'));
    if (userRole === 'admin') {
      return JSON.parse(localStorage.getItem('userInfo'));
    } else {
      return false;
    }
  } else {
    return false;
  }
};