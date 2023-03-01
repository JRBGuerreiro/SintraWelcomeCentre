import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import ProductCard from './ProductCard';

const PopularProducts: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex w-full items-center justify-center bg-white py-20 px-10 text-swc-green">
      <div className="flex w-full flex-col items-center justify-around">
        <div className="flex w-full flex-col items-center text-center">
          <p className="mb-2 font-rubik text-sm font-bold uppercase">
            Popular Products
          </p>
          <h1 className="mb-4 text-6xl font-black uppercase text-green-700">
            Checkout our Products
          </h1>
          <p className="font-rubik text-dark-gray tablet:px-20">
            I'm baby activated charcoal offal waistcoat, raclette skateboard
            slow-carb viral man bun jean shorts pork belly DIY tumblr.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-around space-y-10 text-white">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
