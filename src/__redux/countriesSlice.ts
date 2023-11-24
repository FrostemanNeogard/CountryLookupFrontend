import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
  },
  reducers: {
    updateCountries: (state, action) => {
      state.countries = action.payload
    },
  },
});

export const { updateCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
