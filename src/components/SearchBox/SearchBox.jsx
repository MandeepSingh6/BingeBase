import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentShow } from "../../store/currentShowSlice";
import { getRecommendations, getShow } from "../../apis/apiRequest";
import { setRecommendedShows } from "../../store/recommendedShowsSlice";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const show = await getShow("", input);
      if (!show) return;
      dispatch(setCurrentShow(show));

      const recommendations = await getRecommendations(
        show.media_type === "tv",
        show.id
      );
      dispatch(setRecommendedShows(recommendations));

      setInput("");
      navigate("/");
    }
  };

  return (
    <div className="relative md:min-w-[400px] lg:min-w-[600px] xl:min-w-[800px] border-2 rounded-md">
      <input
        type="text"
        placeholder="Search TV Show"
        className="pl-1 py-1 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleSubmit}
        // onmou
      />
      <div className="absolute right-2 top-0 translate-y-[30%]">
        <AiOutlineSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBox;
