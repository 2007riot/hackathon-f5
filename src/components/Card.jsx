import React from "react";
import { Card as ProductCard } from "flowbite-react";

function Card({ imgSrc, title, subtitle, price, buttonText }) {
  return (
    <ProductCard className="max-w-sm" imgSrc={imgSrc} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">{price}</p>
      <button className="btn btn-primary">{buttonText}</button>
    </ProductCard>
  );
}

export default Card;
