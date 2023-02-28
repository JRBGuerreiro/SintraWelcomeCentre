import { type NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Hero from '@swc/components/Hero';
import About from '@swc/components/About';
import WhyUs from '@swc/components/WhyUs';

const Home: NextPage = () => {
  return (
    <main>
      <section className="flex h-screen w-full">
        <Hero />
      </section>
      <section>
        <About />
      </section>
      {/* <section>
        <WhyUs />
      </section> */}
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
