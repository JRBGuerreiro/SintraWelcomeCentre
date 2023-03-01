import type { FC } from 'react';

import Star from './svg/Star';

const ProductCard: FC = () => (
  <div className="relative flex h-[480px] items-end justify-center rounded-3xl bg-swc-green">
    <figure className="absolute h-full overflow-hidden rounded-2xl">
      <img
        src="/assets/images/destinations/pena-palace-inside.jpg"
        alt="Sintra"
        loading="lazy"
        className="object-cover"
      />
    </figure>

    <div className="relative m-6 flex max-h-32 flex-col rounded-2xl bg-white py-5 px-4 text-swc-green">
      <div className="absolute -top-3 right-3 flex items-end justify-end rounded-2xl bg-swc-green p-2 text-white">
        {Array.from(new Array(5), () => (
          <Star className="h-4 w-4" fill="currentColor" />
        ))}
      </div>

      <p className="text-xs font-medium uppercase">
        <a href="#">Sintra</a>
      </p>

      <h1 className="text-xl font-black uppercase text-green-700">
        <a href="#">Palácio da Pena</a>
      </h1>

      <p className="overflow-hidden text-dark-gray">
        I'm baby tacos distillery VHS pinterest. Wolf moon ascot edison bulb
        shabby chic everyday carry.
      </p>
    </div>
  </div>
);

export default ProductCard;
