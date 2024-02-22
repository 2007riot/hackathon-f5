import React from "react";
import TravelCards from "../components/TravelCards";

function CardGroup({ openModal }) {
  return (
    <div className="flex flex-row flex-wrap">
      <TravelCards openModal={openModal} />
    </div>
  );
}
export default CardGroup;
