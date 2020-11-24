import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetch: ['payload'],
  fetchLoading: null,
  fetchSuccess: ['response'],
  fetchFailure: ['errorMessage'],
  cancel: ['payload'],
  actionSuccess: ['response'],
});

export const ServiceTypes = Types;
export default Creators;
