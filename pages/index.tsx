import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Landing from '@swc/components/Landing';

const Home = () => {
  return <Landing />;
};

export async function getStaticProps({ locale = 'en' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Home;
