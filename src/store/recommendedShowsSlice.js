import { createSlice } from "@reduxjs/toolkit";

const recommendedShowsSlice = createSlice({
  name: "recommendedShows",
  initialState: [],
  reducers: {
    setRecommendedShows: (state, action) => (state = action.payload),
  },
});

export default recommendedShowsSlice.reducer;
export const { setRecommendedShows } = recommendedShowsSlice.actions;
