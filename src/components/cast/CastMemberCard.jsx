import React, { useEffect, useState } from "react";
import { SMALL_COVER_IMG_BASE_URL } from "../../config";
import { getActorDetails } from "../../apis/apiRequest";
import { Link } from "react-router-dom";

const CastMemberCard = ({ name, profile_path, id }) => {
  return (
    <div className="min-w-[80px] max-w-[80px] min-h-[80px] md:min-w-[100px] md:min-h-[100px] 2xl:max-w-[120px]">
      <Link to={`/actorDetails/${name}/${id}`}>
        <img
          className=""
          src={SMALL_COVER_IMG_BASE_URL + profile_path}
          alt=""
        />
        <h3 className="text-center text-sm overflow-x-scroll">{name}</h3>
      </Link>
    </div>
  );
};

export default CastMemberCard;
