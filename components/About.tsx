import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { EmblaOptionsType } from 'embla-carousel-react';

import Carousel from './Carousel';

const About: FC = () => {
  const { t } = useTranslation('common');
  const content = t('about.content', { returnObjects: true });

  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: 'center'
  };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="flex justify-center bg-light-gray p-10">
      <div className="flex flex-col items-center justify-center gap-4 text-dark-gray laptop:w-1/2">
        <span className="text-center font-inter text-2xl font-bold tracking-tight laptop:text-4xl">
          {t('about.title')}
        </span>
        <div className="tablet:space-y-4 laptop:flex laptop:flex-row laptop:items-center laptop:space-x-0">
          <Carousel slides={SLIDES} options={OPTIONS} />

          <div className="space-y-4 font-inter font-medium laptop:pl-4">
            {Object.values(content).map((content, index) => (
              <li key={index} className="list-none">
                {content}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
