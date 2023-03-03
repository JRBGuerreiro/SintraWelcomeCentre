import type { FC } from 'react';
import Link from 'next/link';

import { type Testimonial } from '@swc/utils/curated-testimonials';
import Star from '@swc/components/svg/Star';

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { name, image, date, title, review, stars, link, language } =
    testimonial;

  return (
    <Link href={link}>
      <div className="relative flex w-full flex-col rounded-3xl bg-light-gray p-8 text-green-500">
        <div className="flex justify-center">
          <div className="absolute -top-4 flex items-center rounded-full bg-green-500 p-2 text-white">
            {Array.from({ length: stars }).map((_, index) => (
              <Star key={index} className="h-4 w-4" fill="currentColor" />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <div className="font-rubik text-lg font-medium capitalize text-dark-gray">
              {name}
            </div>
            <div className="font-rubik text-xs capitalize text-dark-gray">
              {new Date(date).toLocaleDateString()}
            </div>
          </div>
          <div>
            <div className="font-rubik text-lg font-bold uppercase text-dark-gray">
              {title}
            </div>
            <div className="font-rubik text-dark-gray">{review}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TestimonialCard;
