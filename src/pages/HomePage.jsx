import Footer from "../components/Footer";
import React from "react";
import CardGroup from "../components/CardGroup";
import Header from "../components/Header";

function HomePage() {
  const backgroundImage =
    'url("https://static.vecteezy.com/system/resources/previews/013/630/282/non_2x/interesting-gradient-design-purple-black-free-photo.jpg")';
  return (
    <div style={{ backgroundImage, backgroundSize: "cover", height: "100vh" }}>
      <Header />
      <CardGroup />
      <Footer />
    </div>
  );
}

export default HomePage;
