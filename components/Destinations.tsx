import { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';

import DestinationCard from '@swc/components/DestinationCard';
import destinations from '@swc/utils/popular-destinations';

const PopularDestinations: FC = () => {
  const { t } = useTranslation('common');
  const [destinationsCount, setDestinationsCount] = useState(3);

  return (
    <div className="flex w-full items-center justify-center bg-white py-20 px-10 text-swc-green">
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

        <div className="mt-8 flex w-full flex-col justify-around space-y-10 text-white">
          {destinations.slice(0, destinationsCount).map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}

          {/* <div className="flex justify-center">
            {destinationsCount < destinations.length && (
              <button
                className="mx-2 rounded-full border-2 border-green-500 py-2 px-4 font-rubik text-sm font-bold uppercase text-swc-green transition-all hover:bg-green-500 hover:text-white"
                onClick={() => {
                  setDestinationsCount(destinationsCount + 3);
                }}
              >
                Show More
              </button>
            )}

            {destinationsCount > 3 && (
              <button
                className="mx-2 rounded-full border-2 border-green-500 py-2 px-4 font-rubik text-sm font-bold uppercase text-swc-green transition-all hover:bg-green-500 hover:text-white"
                onClick={() => {
                  setDestinationsCount(destinationsCount - 3);
                }}
              >
                Show Less
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
