
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import authReducer from './slicer/auth.slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
  
  
});

export default rootReducer;
