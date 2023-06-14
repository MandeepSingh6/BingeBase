import { createSlice } from "@reduxjs/toolkit";

const trendingShowSlice = createSlice({
  name: "trendingShows",
  initialState: [],
  reducers: {
    setTrendingShows: (state, action) => (state = action.payload),
  },
});

export default trendingShowSlice.reducer;
export const { setTrendingShows } = trendingShowSlice.actions;
