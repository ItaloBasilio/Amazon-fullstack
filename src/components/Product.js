import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-400 " />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div>
        <Currency quantity={price} currency="USD" />
      </div>

      {hasPrime && (
        <div>
            <img src="https://m.media-amazon.com/images/G/01/support_images/GUID-A5E374A8-16DA-4B39-8E3F-3F3B34E831FB=2=pt-BR=Normal.png" width={150} alt="" />
            <p>FREE Next-day Delivery</p>
        </div>
      )}

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
