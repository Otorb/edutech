import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slicer/userSlice';
import usersReducer from './slicer/usersSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import eventReducer from './slicer/eventSlice'
import courseReducer from './slicer/courseSlice'
import noteSlice from './slicer/noteSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['users']
};


const rootReducer = combineReducers({
  user: userReducer,
  users:usersReducer,
  event:eventReducer,
  course:courseReducer,
  note:noteSlice
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurar el store con middleware para ignorar las acciones no serializables
const storeRedux = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorar estas acciones no serializables
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Crear el persistor
const persistor = persistStore(storeRedux);

export { storeRedux, persistor };



