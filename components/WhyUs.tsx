import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import StarIcon from './svg/Star';
import TravellerChoiceIcon from './svg/TravellerChoice';
import RocketIcon from './svg/Rocket';

const WhyUs: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex w-full items-center justify-center bg-swc-green p-10 text-white">
      <div className="flex w-full flex-col items-center justify-between font-bold tablet:space-y-8 laptop:w-1/2 laptop:flex-row laptop:items-end laptop:space-x-8">
        <div className="flex flex-col items-center space-y-4 p-4 text-white tablet:order-1">
          <StarIcon className="h-16 w-16" strokeWidth={1.5} />
          <div className="flex flex-col items-center">
            <p className="text-3xl">400+</p>
            <p className="text-xl font-medium">5 Star Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 text-white">
          <TravellerChoiceIcon className="h-32 w-32" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-extrabold">Traveller's Choice 2022</p>
            <p className="text-xl font-medium">TripAdvisor Award</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 text-white">
          <RocketIcon className="h-16 w-16" strokeWidth={1.5} />
          <div className="flex flex-col items-center">
            <p className="text-3xl">2+</p>
            <p className="text-xl font-medium">Years In Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
