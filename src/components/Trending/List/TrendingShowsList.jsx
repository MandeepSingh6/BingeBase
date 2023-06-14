import React from "react";
import ThumbnailCard from "../../Card/ThumbnailCard";
import { useSelector } from "react-redux";

const TrendingShowsList = () => {
  const trendingShows = useSelector((state) => state.trendingShows.slice(1));
  return (
    <div className="mt-4">
      <h3 className="text-xl md:text-2xl font-bold">Trending Today</h3>
      <div className="flex  overflow-scroll gap-1 lg:gap-2">
        {trendingShows.map((show) => {
          return <ThumbnailCard key={show.id} {...show} />;
        })}
      </div>
    </div>
  );
};

export default TrendingShowsList;
