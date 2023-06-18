import React from "react";
import { SMALL_COVER_IMG_BASE_URL } from "../../config";
import { getRecommendations, getShow } from "../../apis/apiRequest";
import { useDispatch } from "react-redux";
import { setCurrentShow } from "../../store/currentShowSlice";
import { setRecommendedShows } from "../../store/recommendedShowsSlice";
import { useNavigate } from "react-router-dom";
import { add } from "../../store/watchListSlice";

const ThumbnailCard = ({
  backdrop_path,
  name,
  id,
  media_type,
  title,
  poster_path,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    const show = await getShow(media_type, id);
    dispatch(setCurrentShow(show));

    const recommendations = await getRecommendations(media_type === "tv", id);
    dispatch(setRecommendedShows(recommendations));
    navigate("/");
  };
  const addToList = async () => {
    const show = await getShow(media_type, id);
    dispatch(add(show));
  };
  return (
    <div className="min-w-[165px] max-w-[265px] md:max-w-[260px] md:min-w-[260px] 2xl:min-w-[280px] 2xl:max-w-[300px] aspect-[2/3] relative cursor-pointer group">
      <img
        className="w-full h-full group-hover:opacity-40"
        src={SMALL_COVER_IMG_BASE_URL + poster_path}
        onClick={() => handleClick()}
        alt={name}
      />
      <div
        onClick={() => handleClick()}
        className="cursor-pointer hidden group-hover:block bg-black text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-lg w-[80%] text-center"
      >
        {name || title}
      </div>
      <button
        className="bg-gray-500 hover:bg-green-400 text-white absolute right-0 top-0 p-3"
        onClick={addToList}
      >
        +
      </button>
    </div>
  );
};

export default ThumbnailCard;
