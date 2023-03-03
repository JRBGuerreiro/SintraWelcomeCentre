import type { FC } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import imageByIndex from '@swc/utils/image-by-index';

type CarouselContent = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: FC<CarouselContent> = (props) => {
  const { slides, options } = props;
  const [ref] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={ref}>
      <div className="-ml-2 flex w-full">
        {slides.map((index) => (
          <div
            className="flex w-full min-w-0 flex-shrink-0 flex-grow-0 basis-full pl-4"
            key={index}
          >
            <img
              className="w-full rounded-2xl object-cover"
              src={imageByIndex(index)}
              alt="Sintra Welcome Center Photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
