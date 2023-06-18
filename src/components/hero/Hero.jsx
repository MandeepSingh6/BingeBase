import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKDROP_BASE_URL } from "../../config";
import CastMembersList from "../cast/CastMembersList";
import { AiFillStar } from "react-icons/ai";
import { add } from "../../store/watchListSlice";
import { getYoutubeVideoId } from "../../apis/apiRequest";

const Hero = () => {
  const dispatch = useDispatch();
  const currentShow = useSelector((state) => state.currentShow);
  const [trailerId, setTrailerId] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const handleClick = () => {
    return dispatch(add(currentShow));
  };
  // const handlePosterClick = () => {
  //   setShowVideo(true);
  // };

  // useEffect(() => {
  //   const getId = async () => {
  //     const id = await getYoutubeVideoId(
  //       currentShow.media_type,
  //       currentShow.id
  //     );
  //     setTrailerId(id);
  //   };
  //   getId();
  //   return () => setShowVideo(false);
  // }, [currentShow]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:gap-2">
        <div className="w-full md:min-w-[300px] md:max-w-[300px]">
          {!showVideo ? (
            <img
              className="w-full"
              src={BACKDROP_BASE_URL + currentShow.poster_path}
              alt={currentShow.title || currentShow.name}
              // onClick={handlePosterClick}
            />
          ) : (
            <iframe
              id="iframe"
              onFocus={() => console.log("first")}
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${trailerId}`}
              allow=""
            ></iframe>
          )}
        </div>
        <div className="w-full sm:min-w-2/4 sm:max-w-2/4 relative ">
          {showVideo && (
            <p
              onClick={() => setShowVideo(false)}
              className="text-white bg-red-600 p-1 rounded-md m-0 cursor-pointer"
            >
              Stop Video
            </p>
          )}
          <h2 className="text-lg font-bold">
            {currentShow.name || currentShow.title}
            <br />
            <button
              onClick={handleClick}
              className="font-light text-sm px-1 py-1 rounded-md bg-blue-700 text-white"
            >
              Add to watchlist
            </button>
          </h2>
          <p className="text-sm">{currentShow.release_date}</p>
          <p className="flex items-center">
            <AiFillStar />
            {currentShow.vote_average.toFixed(1) < 1
              ? "Not Rated"
              : currentShow.vote_average.toFixed(1)}
          </p>
          <p className="text-justify font-thin mb-2 max-h-[135px] sm:max-h-[180px] md:max-h-[125px] xl:max-h-[200px] overflow-y-scroll">
            {currentShow.overview}
          </p>

          <div className="hidden sm:block absolute bottom-0 left-0 right-0 text-lg">
            <h3 className="">Top Cast Members</h3>
            <CastMembersList
              id={currentShow.id}
              type={currentShow.media_type}
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <h3 className="text-lg">Top Cast Members</h3>
        <CastMembersList id={currentShow.id} type={currentShow.media_type} />
      </div>
    </>
  );
};

export default Hero;
