import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as ServiceReducer } from './Service/Reducers'

export default () => {
  const appReducer = combineReducers({
    user: UserReducer,
    service: ServiceReducer,
  })

  const rootReducer = (state, action) => {

    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
