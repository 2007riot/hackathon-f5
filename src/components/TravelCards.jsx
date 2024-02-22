import React from "react";
import Card from "./Card";
import travel from "db/travel.js";

function TravelCards({ onCardButtonClick }) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {travel.map((travelItem, index) => (
        <Card
          key={index}
          image={travelItem.image}
          title={travelItem.title}
          description={travelItem.description}
          activities={travelItem.activities}
          onButtonClick={onCardButtonClick}
        />
      ))}
    </div>
  );
}

export default TravelCards;

