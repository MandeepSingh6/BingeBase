import { configureStore } from "@reduxjs/toolkit";
import trendingShowsSlice from "./trendingShowsSlice";
import recommendedShowsSlice from "./recommendedShowsSlice";
import currentShowSlice from "./currentShowSlice";
import watchListSlice from "./watchListSlice";

const store = configureStore({
  reducer: {
    trendingShows: trendingShowsSlice,
    recommendedShows: recommendedShowsSlice,
    currentShow: currentShowSlice,
    watchlist: watchListSlice,
  },
});

export default store;
