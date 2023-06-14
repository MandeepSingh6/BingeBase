import React from "react";
import { SMALL_COVER_IMG_BASE_URL } from "../../config";
import { getRecommendations, getShow } from "../../apis/apiRequest";
import { useDispatch } from "react-redux";
import { setCurrentShow } from "../../store/currentShowSlice";
import { setRecommendedShows } from "../../store/recommendedShowsSlice";
import { useNavigate } from "react-router-dom";

const ThumbnailCard = ({ backdrop_path, name, id, media_type, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    const show = await getShow(media_type, id);
    dispatch(setCurrentShow(show));

    const recommendations = await getRecommendations(media_type === "tv", id);
    dispatch(setRecommendedShows(recommendations));
    navigate("/");
  };
  return (
    <div
      className="min-w-[200px] max-w-[240px] md:max-w-[300px] md:min-w-[300px] 2xl:min-w-[340px] aspect-video relative cursor-pointer group"
      onClick={() => handleClick()}
    >
      <img
        className="w-full h-full group-hover:opacity-40"
        src={SMALL_COVER_IMG_BASE_URL + backdrop_path}
        alt={name}
      />
      <div className="hidden group-hover:block bg-black text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-lg w-[80%] text-center">
        {name || title}
      </div>
    </div>
  );
};

export default ThumbnailCard;
