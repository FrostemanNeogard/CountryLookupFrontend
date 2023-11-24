import { createSlice } from "@reduxjs/toolkit";

export const sekSlice = createSlice({
  name: 'sek',
  initialState: {
    value: 0,
  },
  reducers: {
    updateSek: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { updateSek } = sekSlice.actions;
export default sekSlice.reducer;
