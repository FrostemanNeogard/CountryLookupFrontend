import { createSlice } from "@reduxjs/toolkit";

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState: {
    value: '',
  },
  reducers: {
    updateToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;