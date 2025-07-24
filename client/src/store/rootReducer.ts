import { combineReducers } from 'redux';
import { searchReducer } from './searchSlice';
import { authReducer } from './authSlice';

export const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
