import axios from 'axios';
import { Config } from 'App/Config';

const serviceApiClient = (token) =>
  axios.create({
    baseURL: Config.BASE_URL,
    headers: {
      authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  });

function fetch(payload) {
  return serviceApiClient(payload.token)
    .get('/service/find/' + payload.userId)
    .then((response) => {
      return response.data;
    })
    .catch(function(error) {
      return null;
    });
}

function cancel(payload) {
  return serviceApiClient(payload.token)
    .patch('/service/cancel/' + payload.serviceId)
    .then((response) => {
      return true;
    })
    .catch(function(error) {
      console.log(error);
      return null;
    });
}

export const serviceService = {
  fetch,
};
