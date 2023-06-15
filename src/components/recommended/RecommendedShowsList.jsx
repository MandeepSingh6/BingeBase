import React from "react";
import ThumbnailCard from "../Card/ThumbnailCard";
import { useSelector } from "react-redux";

const RecommendedShowsList = () => {
  const recommendations = useSelector((state) => state.recommendedShows);
  return (
    <div className="mt-4">
      <h3 className="text-xl md:text-2xl font-bold">Recommendations</h3>
      <div className="flex  overflow-scroll gap-1 lg:gap-2">
        {recommendations.map((show) => {
          return show.poster_path && <ThumbnailCard key={show.id} {...show} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedShowsList;
