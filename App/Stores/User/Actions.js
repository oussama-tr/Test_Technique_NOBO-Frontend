import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  register: ['payload'],
  registerSuccess: ['response'],
  registerFailure: ['errorMessage'],
  login: ['payload'],
  loginSuccess: ['response'],
  loginFailure: ['errorMessage'],
  logout: null,
});

export const UserTypes = Types;
export default Creators;
