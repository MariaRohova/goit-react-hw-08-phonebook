import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactReduser';
import { filtersReducer } from './filterReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsPersistConfig = {
  key: 'token',
  storage,
  whiteList: ['token'],
};
const tokenPersistReducer = persistReducer(contactsPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: tokenPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)