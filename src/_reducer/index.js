import { combineReducers } from 'redux';
import  authReducer  from './authentification.reducer';
import  usersReducer  from './users.reducer';


const allReducers = combineReducers({
  authReducer :authReducer,
  usersReducer: usersReducer
});

export default allReducers;