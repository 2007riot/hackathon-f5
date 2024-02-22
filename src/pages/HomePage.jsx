import Footer from "../components/Footer";
import React, { useState } from "react";
import CardGroup from "../components/CardGroup";
import Header from "../components/Header";
import ModalView from "../components/ModalView";

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);

  const handleOpenModal = (info) => {
    setCardInfo(info);
    setOpenModal(true);
  };

  const backgroundImage =
    'url("https://static.vecteezy.com/system/resources/previews/013/630/282/non_2x/interesting-gradient-design-purple-black-free-photo.jpg")';
  return (
    <div
      className="flex flex-col justify-between"
      style={{ backgroundImage, backgroundSize: "cover", minHeight: "100vh" }}
    >
      <Header />
      <CardGroup openModal={handleOpenModal} />
      <Footer />
      <ModalView
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        cardInfo={cardInfo}
      />
    </div>
  );
}

export default HomePage;
