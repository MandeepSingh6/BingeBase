import React, { useEffect, useState } from "react";
import CastMemberCard from "./CastMemberCard";
import { getCastMembers } from "../../apis/apiRequest";

const CastMembersList = ({ type, id }) => {
  const [castMembers, setCastMembers] = useState([]);

  useEffect(() => {
    const fetchCastMember = async (type, id) => {
      const data = await getCastMembers(type, id);
      data &&
        setCastMembers(
          data.slice(0, 12).filter((member) => member.profile_path)
        );
    };
    fetchCastMember(type, id);
  }, [id]);

  return (
    <div className="flex justify-left gap-1 lg:gap-2 mt-2 max-w-full overflow-scroll">
      {castMembers.map((member) => {
        return <CastMemberCard key={member.id} {...member} />;
      })}
    </div>
  );
};

export default CastMembersList;
