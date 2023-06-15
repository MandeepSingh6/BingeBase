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
      <div className="grid grid-cols-fluid">
        {shows.map((show) => (
          <div key={show.id} className="relative bg-black m-auto mb-4">
            <ThumbnailCard {...show} />
            <button
              className="bg-gray-500 hover:bg-red-600 text-white absolute right-0 top-0 p-3"
              onClick={() => dispatch(remove(show.id))}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchlistPage;
