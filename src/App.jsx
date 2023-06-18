import React, { useEffect } from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { getTrendingShows } from "./apis/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { setTrendingShows } from "./store/trendingShowsSlice";
import { setCurrentShow } from "./store/currentShowSlice";

const App = () => {
  const dispatch = useDispatch();
  const savedShows = useSelector((state) => state.watchlist);
  const trendingShows = useSelector((state) => state.trendingShows);
  useEffect(() => {
    const fetchTrendingShows = async () => {
      const shows = await getTrendingShows();
      dispatch(setTrendingShows(shows.slice(1)));
      dispatch(setCurrentShow(shows[0]));
    };
    fetchTrendingShows();
  }, []);

  useEffect(() => {
    return localStorage.setItem("watchlistItems", JSON.stringify(savedShows));
  }, [savedShows]);

  if (trendingShows.length < 1) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="p-1 md:p-2 lg:px-4 xl:px-16 xl:py-6 2xl:px-20 2xl:text-lg">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
