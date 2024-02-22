import React from "react";
import Card from "./Card";
import travel from "db/travel.json";

function TravelCards() {
  return (
    <div>
      {travel.map((travel, index) => (
        <Card
          key={index}
          image={travel.image}
          title={travel.title}
          description={travel.description}
          activities={travel.activities}
        />
      ))}
    </div>
  );
}

export default TravelCards;
