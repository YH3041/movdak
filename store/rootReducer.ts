import { combineReducers } from '@reduxjs/toolkit';
import home from './homeSlice';

const reducer = combineReducers({
  home
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
