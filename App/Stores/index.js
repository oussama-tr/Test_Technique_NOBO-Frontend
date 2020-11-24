import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as UserReducer } from './User/Reducers'

export default () => {
  const appReducer = combineReducers({
    user: UserReducer,
  })

  const rootReducer = (state, action) => {

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
