import React, { useState } from "react";
import TravelCards from "../components/TravelCards";
import ModalView from "./ModalView";

function CardGroup() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-row flex-wrap mx-auto">
      <TravelCards onCardButtonClick={() => setOpenModal(true)} />
      <ModalView openModal={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default CardGroup;
