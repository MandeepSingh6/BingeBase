import { createSlice } from "@reduxjs/toolkit";

const sliceData =
  localStorage.getItem("watchlistItems") &&
  JSON.parse(localStorage.getItem("watchlistItems"));

const watchListSlice = createSlice({
  name: "watchList",
  initialState: sliceData || [],
  reducers: {
    add: (state, action) => {
      !state.find((item) => item.id === action.payload.id) &&
        state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((show) => show.id !== action.payload),
  },
});

export const { add, remove } = watchListSlice.actions;

export default watchListSlice.reducer;
