import axios from "axios";
import arrayShuffle from "array-shuffle";

import { API_BASE_URL } from "../config";

const API_KEY_PARAMS = import.meta.env.VITE_API_KEY_PARAMS;

export const getTrendingShows = async () => {
  const res1 = await axios.get(
    API_BASE_URL + "/trending/tv/day" + API_KEY_PARAMS
  );
  const res2 = await axios.get(
    API_BASE_URL + "/trending/movie/day" + API_KEY_PARAMS
  );

  return arrayShuffle([...res1?.data?.results, ...res2?.data?.results]);
};

export const getRecommendations = async (isTv, id) => {
  const res = isTv
    ? await axios.get(
        API_BASE_URL + `/tv/${id}/recommendations` + API_KEY_PARAMS
      )
    : await axios.get(
        API_BASE_URL + `/movie/${id}/recommendations` + API_KEY_PARAMS
      );

  return res?.data?.results;
};

export const getCastMembers = async (type, id) => {
  const res =
    type === "tv"
      ? await axios.get(
          API_BASE_URL + `/tv/${id}/aggregate_credits` + API_KEY_PARAMS
        )
      : await axios.get(API_BASE_URL + `/movie/${id}/credits` + API_KEY_PARAMS);

  return res?.data?.cast;
};

export const getShow = async (type, id) => {
  if (!type) {
    const res = await axios.get(
      `${API_BASE_URL}/search/multi${API_KEY_PARAMS}&query=${id}`
    );
    for (let i of res.data.results) {
      if (i.media_type !== "person") {
        return i;
      }
    }
  } else {
    const res =
      type === "movie"
        ? await axios.get(API_BASE_URL + "/movie/" + id + API_KEY_PARAMS)
        : await axios.get(API_BASE_URL + "/tv/" + id + API_KEY_PARAMS);

    return { ...res?.data, media_type: type };
  }
};

export const getActorDetails = async (name, id) => {
  const res1 = await axios.get(
    API_BASE_URL + "/search/person" + API_KEY_PARAMS + "&query=" + name
  );
  const res2 = await axios.get(API_BASE_URL + "/person/" + id + API_KEY_PARAMS);

  return { ...res1?.data?.results[0], ...res2?.data };
};

export const getYoutubeVideoId = async (type, id) => {
  const res = await axios.get(
    `${API_BASE_URL}/${
      type === "tv" ? "tv" : "movie"
    }/${id}/videos${API_KEY_PARAMS}`
  );
  return res?.data?.results[0]?.key;
};
