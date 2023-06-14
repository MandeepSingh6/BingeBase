import { createSlice } from "@reduxjs/toolkit";

const currentShowSlice = createSlice({
  name: "currentShow",
  initialState: {},
  reducers: {
    setCurrentShow: (state, action) => (state = action.payload),
  },
});
export const { setCurrentShow } = currentShowSlice.actions;
export default currentShowSlice.reducer;
