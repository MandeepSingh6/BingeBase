import React, { useEffect } from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { getTrendingShows } from "./apis/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { setTrendingShows } from "./store/trendingShowsSlice";
import { setCurrentShow } from "./store/currentShowSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const savedShows = useSelector((state) => state.watchlist);
  const trendingShows = useSelector((state) => state.trendingShows);
  const darkTheme = useSelector((state) => state.theme);

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
    <div
      className={`min-h-screen p-1 md:p-2 lg:px-4 xl:px-12 xl:py-2 2xl:px-20 2xl:text-lg ${
        darkTheme && "bg-gray-900 text-white"
      }`}
    >
      <Header />
      <Outlet />
      <ToastContainer position="top-left" />
    </div>
  );
};

export default App;
