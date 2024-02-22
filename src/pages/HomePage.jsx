import React from "react";
import Card from "../components/Card";

function HomePage() {
  return (
    <>
      <div>Hi, HomePage</div>
      <h1>Explorar</h1>
      <div>
        <Card
          imgSrc="/images/blog/image-4.jpg"
          title="Noteworthy technology acquisitions 2021"
          subtitle="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          price="$100"
          buttonText="Buy Now"
        />
      </div>
    </>
  );
}

export default HomePage;
