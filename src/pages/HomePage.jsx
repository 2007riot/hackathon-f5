import React from "react";
import Card from "../components/Card";

function HomePage() {
  return (
    <>
      <div>Hi, HomePage</div>
      <h1>Explorar</h1>
      <div>
        <Card
          imgSrc="src/assets/img/moon-trip.jpeg"
          title="Fly me to the moon"
          description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
          price="5.000€"
          buttonText="Más información"
        />
      </div>
    </>
  );
}

export default HomePage;
