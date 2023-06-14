import React from "react";
import Hero from "../components/hero/Hero";
import TrendingShowsList from "../components/Trending/List/TrendingShowsList";
import RecommendedShowsList from "../components/recommended/RecommendedShowsList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const recommendations = useSelector((state) => state.recommendedShows);
  return (
    <div className="mt-1">
      <Hero />
      {recommendations.length > 0 && <RecommendedShowsList />}
      <TrendingShowsList />
    </div>
  );
};

export default HomePage;
