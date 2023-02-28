import type { FC } from 'react';
import { useTranslation } from 'next-i18next';

const WhyUs: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex w-full flex-col items-center bg-forest-green px-20 py-10 text-dark-gray">
      <span className="pb-10 font-raleway text-2xl font-extrabold uppercase">
        {t('nav.about')}
      </span>
      <div className="flex w-full flex-col rounded-lg border border-dark-gray bg-shamrock text-white shadow">
        <div className="p-10">
          <p className="pb-5 font-semibold">{t('about')}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
