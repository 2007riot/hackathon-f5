import React from "react";
import { Card as ProductCard } from "flowbite-react";
import { Button } from "flowbite-react";

function Card({ imgSrc, title, description, price, buttonText }) {
  return (
    <ProductCard className="w-3/12 bg-black rounded-xl m-2">
      <div class="flex flex-col">
        <div>
          <img src={imgSrc} alt={title} className="rounded-lg" />
        </div>
        <div>
          <h5 className="text-3xl font-bold tracking-tight text-white mt-4 mb-2">
            {title}
          </h5>
          <p className="font-normal text-gray-400 dark:text-gray-400">
            {description}
          </p>
          <p className="font-bold text-white text-lg">{price}</p>
        </div>
      </div>
      <Button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-2 px-4 w-10/12 rounded-xl mx-auto"
        gradientDuoTone="purpleToBlue"
      >
        {buttonText}
      </Button>
    </ProductCard>
  );
}

export default Card;
