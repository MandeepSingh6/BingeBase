import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: true,
  reducers: {
    toggle: (state) => !state,
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
