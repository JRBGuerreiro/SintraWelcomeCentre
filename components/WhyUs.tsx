import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import StarIcon from '@swc/components/svg/Star';
import TravellerChoiceIcon from '@swc/components/svg/TravellerChoice';
import RocketIcon from '@swc/components/svg/Rocket';

const WhyUs: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex w-full items-center justify-center bg-green-700 p-10 text-white">
      <div className="flex w-full flex-col items-center justify-between">
        <div className="flex flex-col items-center p-4 text-white">
          <TravellerChoiceIcon className="h-32 w-32" />
          <div className="-mt-4 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">2022</p>
            <p className="text-3xl font-bold">Traveller's Choice</p>
            <p className="text-xl font-normal">TripAdvisor Award</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-around">
          <div className="flex flex-col items-center p-4 text-white">
            <StarIcon className="h-16 w-16" strokeWidth={1.5} />
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">400+</p>
              <p className="text-xl font-medium">5 Star Reviews</p>
            </div>
          </div>

          <div className="flex flex-col items-center p-4 text-white">
            <RocketIcon className="h-16 w-16" strokeWidth={1.5} />
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">2+</p>
              <p className="text-xl font-medium">Years In Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
