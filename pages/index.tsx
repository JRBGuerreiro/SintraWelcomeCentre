import { type FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HeroSection from '@swc/components/HeroSection';

const Home: FC = () => {
  return (
    <main className="flex h-screen w-full">
      <HeroSection />
    </main>
  );
};

export async function getStaticProps({ locale = 'en' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Home;
