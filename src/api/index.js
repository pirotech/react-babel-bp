import axios from 'axios';
import usersApi from './usersApi';

// create instance
const instance = axios.create({
  baseURL: process.env.API,
  withCredentials: true
});
// interceptors
instance.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    window.location.href = '/auth/login';

    return Promise.reject(error);
  }
});
// authorization
const token = localStorage.getItem('token');
instance.defaults.headers['Authorizations'] = `Bearer ${token}`;

export {
  usersApi
};

export default instance;