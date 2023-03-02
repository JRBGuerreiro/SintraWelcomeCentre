import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import DestinationCard from './DestinationCard';

const PopularDestinations: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex  w-full items-center justify-center bg-white py-20 px-10 text-swc-green">
      <div className="flex w-full flex-col items-center justify-around">
        <div className="flex w-full flex-col items-center text-center">
          <p className="mb-2 font-rubik text-sm font-bold uppercase">
            Magical Sintra
          </p>
          <h1 className="mb-4 text-6xl font-black uppercase text-green-700">
            Popular Destinations
          </h1>
          <p className="font-rubik text-dark-gray tablet:px-20">
            I'm baby activated charcoal offal waistcoat, raclette skateboard
            slow-carb viral man bun jean shorts pork belly DIY tumblr.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-around space-y-10 text-white">
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
