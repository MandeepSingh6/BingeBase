import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ThumbnailCard from "../components/Card/ThumbnailCard";
import { remove } from "../store/watchListSlice";

const WatchlistPage = () => {
  const shows = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  if (shows.length < 1) {
    return <h2 className="mt-4 text-center">Watchlist is Empty!</h2>;
  }
  return (
    <>
      <h2 className="text-xl font-bold my-2 text-center">Watchlist</h2>
      <div className="grid grid-cols-fluid gap-2">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-gray-300 flex flex-col min-w-[200px] max-w-[240px] mx-auto 2xl:max-w-[340px] md:max-w-[300px]"
          >
            <ThumbnailCard {...show} />
            <button
              className="py-1 hover:bg-red-500 hover:text-white"
              onClick={() => dispatch(remove(show.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchlistPage;
