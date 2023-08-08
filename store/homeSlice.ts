import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {}
  },
  reducers: {}
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
