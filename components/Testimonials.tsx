import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

import TestimonialCard from '@swc/components/TestimonialCard';
import testimonials from '@swc/utils/curated-testimonials';

const CuratedTestimonals: FC = () => {
  const { t, i18n } = useTranslation('common');

  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.language === i18n.language
  );

  return (
    <div className="flex w-full items-center justify-center bg-white py-20 px-10 text-swc-green">
      <div className="flex w-full flex-col items-center justify-around">
        <div className="flex w-full flex-col items-center text-center">
          <p className="mb-2 font-rubik text-sm font-bold uppercase">
            testimonials
          </p>
          <h1 className="mb-4 text-6xl font-black uppercase text-green-700">
            What people are saying
          </h1>
          <p className="font-rubik text-dark-gray tablet:px-20">
            I'm baby activated charcoal offal waistcoat, raclette skateboard
            slow-carb viral man bun jean shorts pork belly DIY tumblr.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-around space-y-10 text-white">
          {filteredTestimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedTestimonals;
