import React from "react";
import TravelCards from "../components/TravelCards";

function CardGroup() {
  return (
    <div className="flex flex-row flex-wrap mx-auto">
      <TravelCards />
    </div>
  );
}

export default CardGroup;
