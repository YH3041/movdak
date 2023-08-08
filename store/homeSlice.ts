import { createSlice } from '@reduxjs/toolkit';

export const home = createSlice({
  name: 'home',
  initialState: {
    url: { backdrop: '' },
    genres: {}
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    }
  }
});

export const { getApiConfiguration, getGenres } = home.actions;

export default home.reducer;
