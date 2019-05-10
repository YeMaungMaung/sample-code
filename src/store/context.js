import React from 'react';

const user = JSON.parse(localStorage.getItem('user')) || {};
const isAuth = localStorage.getItem('isAuth');

const Store = React.createContext({
  user,
  isAuth,
});

export default Store;
