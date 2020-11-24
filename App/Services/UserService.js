import axios from 'axios';
import { Config } from 'App/Config';

const userApiClientBase = () =>
  axios.create({
    baseURL: Config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  });

const userApiClient = (token) =>
  axios.create({
    baseURL: Config.BASE_URL,
    headers: {
      authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  });

function register(payload) {
  return userApiClientBase()
    .post('/user/', payload)
    .then((response) => {
      return response.data;
    })
    .catch(function(error) {
      return null;
    });
}

function login(payload) {
  return userApiClientBase()
    .post('/auth/login/', payload)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return null;
    });
}

export const userService = {
  register,
  login,
};
