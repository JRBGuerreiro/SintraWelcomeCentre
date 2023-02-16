import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import aboutUsPhoto from '@swc/assets/about-us.jpg';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <main className="flex w-full flex-col items-center bg-light-gray px-20 py-10 text-dark-gray">
      <span className="pb-10 font-raleway text-2xl font-extrabold uppercase">
        {t('nav.about')}
      </span>
      <div className="flex w-full flex-col rounded-lg border border-dark-gray bg-shamrock text-white shadow">
        <Image
          src={aboutUsPhoto}
          alt="The Village Concierge"
          className="w-full"
        />
        <div className="p-10">
          <p className="pb-5 font-semibold">{t('about')}</p>
        </div>
      </div>
    </main>
  );
};

export default About;
