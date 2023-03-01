import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { EmblaOptionsType } from 'embla-carousel-react';

import Carousel from './Carousel';

const About: FC = () => {
  const { t } = useTranslation('common');
  const content = t('about.content', { returnObjects: true });

  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: 'center',
    draggable: false,
    dragFree: false
  };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="flex justify-center bg-white p-10">
      <div className="flex flex-col items-center justify-center gap-8 text-dark-gray">
        <span className="text-center font-inter text-2xl font-extrabold tracking-tight text-swc-green">
          {t('about.title')}
        </span>
        <div className="">
          <Carousel slides={SLIDES} options={OPTIONS} />

          <div className="space-y-4 font-inter font-medium">
            {Object.values(content).map((content, index) => (
              <li key={index} className="list-none text-[100%]">
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
