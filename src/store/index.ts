import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
