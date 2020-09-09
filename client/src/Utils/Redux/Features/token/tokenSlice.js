/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: undefined,
  },
  reducers: {
    setToken: (state, event) => {
      state.value = event.payload;
    },
    clearToken: (state) => {
      state.value = undefined;
    },
  },
});

export const selectToken = (state) => (state);

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
