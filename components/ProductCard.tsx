import type { FC } from 'react';
import Clock from './svg/Clock';
import Person from './svg/Person';
import Pin from './svg/Pin';

const ProductCard: FC = () => (
  <div className="flex w-full flex-col items-center overflow-hidden rounded-3xl bg-swc-green text-white">
    <div className="flex h-[250px] overflow-hidden rounded-t-2xl">
      <img
        src="/assets/images/village-concierge.jpg"
        alt="Sintra"
        loading="lazy"
        className="w-full object-cover object-center"
      />
    </div>

    <div className="flex w-full flex-col space-y-4 bg-light-gray p-8">
      <h1 className="text-xl font-black uppercase text-green-700">
        Visit sintra by tuktuk
      </h1>
      <p className="text-dark-gray">
        I'm baby activated charcoal offal waistcoat, raclette skateboard
        slow-carb viral man bun jean shorts pork belly DIY tumblr.
      </p>
      <div className="flex justify-end">
        <div className="flex max-w-fit divide-x-2 divide-green-700 rounded-full bg-white py-2 px-4 text-dark-gray shadow-md">
          <div className="flex items-center space-x-1 px-3 first:pl-0">
            <Clock className="w-4" />
            <span>6h</span>
          </div>
          <div className="flex items-center space-x-1 px-3">
            <Person className="w-4" /> <span>10</span>
          </div>
          <div className="flex items-center space-x-1 px-3 last:pr-0">
            <Pin className="w-4" />
            <span>Sintra</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full items-center justify-between p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-black">100€</h1>
        <span className="-mt-1 text-xs">/per person</span>
      </div>
      <button className="rounded-full border-2 border-white py-3 px-6 font-bold uppercase transition-all hover:border-green-500 hover:bg-white hover:text-green-500">
        book now
      </button>
    </div>
  </div>
);

export default ProductCard;
