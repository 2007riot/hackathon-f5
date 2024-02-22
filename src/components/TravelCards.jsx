import React from "react";
import Card from "./Card";
import travel from "../../db/travel";

function TravelCards({ openModal }) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {travel.map((travelItem) => (
        <Card
          key={travelItem.id}
          image={travelItem.image}
          title={travelItem.title}
          description={travelItem.description}
          activities={travelItem.activities}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

export default TravelCards;
