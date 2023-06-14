import React, { useState, useEffect } from "react";
import { getActorDetails } from "../apis/apiRequest";
import { useParams } from "react-router-dom";
import ActorHero from "../components/actorDetails/ActorHero";

const ActorDetails = () => {
  const { name, id } = useParams();
  const [actorDetails, setActorDetails] = useState({});
  useEffect(() => {
    const fetchData = async (actorName, id) => {
      const actor = await getActorDetails(actorName, id);
      actor && setActorDetails(actor);
    };
    fetchData(name, id);
  }, [name]);
  return (
    <div>
      <ActorHero {...actorDetails} />
    </div>
  );
};

export default ActorDetails;
