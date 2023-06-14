import React from "react";
import { SMALL_COVER_IMG_BASE_URL } from "../../config";
import ThumbnailCard from "../Card/ThumbnailCard";

const ActorHero = ({
  known_for,
  name,
  profile_path,
  place_of_birth,
  birthday,
  biography,
}) => {
  if (!known_for) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="my-1">
      <img
        className="w-[120px] md:w-[200px] m-auto rounded-md"
        src={SMALL_COVER_IMG_BASE_URL + profile_path}
        alt=""
      />
      <div className="text-center">
        <h2 className="md:text-xl font-extrabold">{name}</h2>
        {place_of_birth && (
          <p className="">
            Birth Place : <span className="font-bold">{place_of_birth}</span>
          </p>
        )}
        {birthday && (
          <p className="">
            Born in : <span className="font-bold">{birthday}</span>
          </p>
        )}

        <p className="text-justify max-h-[150px] overflow-y-scroll mt-1">
          {biography}
        </p>
        {known_for.length > 0 && (
          <div>
            <span className="block md:text-lg md:mt-4 text-left font-bold my-1">
              Known For
            </span>
            <div className="flex  overflow-scroll gap-2">
              {known_for.map((item) => (
                <ThumbnailCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorHero;
