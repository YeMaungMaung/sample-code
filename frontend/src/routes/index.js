import Profile from '../pages/Profile';
import Login from '../pages/Login';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];
export default routes;
