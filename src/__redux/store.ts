import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authTokenSlice from './authTokenSlice';
import countriesSlice from './countriesSlice';
import sekSlice from './sekSlice';

const rootReducer = combineReducers({
  authToken: authTokenSlice,
  countries: countriesSlice,
  sek: sekSlice,
})

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
