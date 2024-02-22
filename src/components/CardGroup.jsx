import React from "react";
import Card from "../components/Card";

function CardGroup() {
  const moonImg =
    "https://okdiario.com/img/2020/11/09/cuando-sera-el-proximo-viaje-a-la-luna.jpg";
  return (
    <div className="flex flex-row flex-wrap mx-auto">
      <Card
        imgSrc={moonImg}
        title="Fly me to the moon"
        description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
        price="5.000€"
        buttonText="Más información"
      />
      <Card
        imgSrc={moonImg}
        title="Fly me to the moon"
        description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
        price="5.000€"
        buttonText="Más información"
      />
      <Card
        imgSrc={moonImg}
        title="Fly me to the moon"
        description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
        price="5.000€"
        buttonText="Más información"
      />
      <Card
        imgSrc={moonImg}
        title="Fly me to the moon"
        description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
        price="5.000€"
        buttonText="Más información"
      />
      <Card
        imgSrc={moonImg}
        title="Fly me to the moon"
        description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
        price="5.000€"
        buttonText="Más información"
      />
      <Card
        imgSrc={moonImg}
        title="Fly me to the moon"
        description="Soñaste pisar la luna? Lo hacemos realidad! Contrata nuestro paquete Full Experience"
        price="5.000€"
        buttonText="Más información"
      />
    </div>
  );
}

export default CardGroup;
