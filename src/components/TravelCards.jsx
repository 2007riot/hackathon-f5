import React from "react";
import Card from "./Card";
import travel from "db/travel.js";

function TravelCards({ onCardButtonClick }) {
  return (
    <div>
      {travel.map((travel, index) => (
        <Card
          key={index}
          image={travel.image}
          title={travel.title}
          description={travel.description}
          activities={travel.activities}
          onButtonClick={onCardButtonClick}
        />
      ))}
    </div>
  );
}

export default TravelCards;
