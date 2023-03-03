import type { FC } from 'react';

import { type ProductPackage } from '@swc/utils/product-packages';
import Clock from '@swc/components/svg/Clock';
import Person from '@swc/components/svg/Person';
import Pin from '@swc/components/svg/Pin';

const ProductCard: FC<{ product: ProductPackage }> = ({ product }) => {
  const { name, image, description, location, price, duration, limit } =
    product;

  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-3xl bg-swc-green text-white">
      <div className="flex h-[250px] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt="Sintra"
          loading="lazy"
          className="w-full object-cover object-center"
        />
      </div>

      <div className="flex w-full flex-col space-y-4 bg-light-gray p-8">
        <h1 className="text-xl font-black uppercase text-green-700">{name}</h1>
        <p className="text-dark-gray">{description}</p>

        <div className="flex max-w-fit divide-x-2 divide-green-700 rounded-full bg-white py-2 px-4 text-dark-gray shadow-md">
          <div className="flex items-center space-x-1 px-3 first:pl-0">
            <Clock className="w-4" />
            <span>
              {duration.value}
              {duration.type === 'hour' ? 'h' : 'd'}
            </span>
          </div>
          <div className="flex items-center space-x-1 px-3">
            <Person className="w-4" /> <span>{limit.value}</span>
          </div>
          <div className="flex items-center space-x-1 px-3 last:pr-0">
            <Pin className="w-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-black">{price.value}€</h1>
          <span className="-mt-1 text-xs">
            {price.type === 'individual' ? '/per person' : '/per group'}
          </span>
        </div>
        <button className="rounded-full border-2 border-white py-2 px-4 font-rubik font-bold uppercase transition-all  hover:bg-white hover:text-green-500">
          book now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
