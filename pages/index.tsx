import { type NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Landing from '@swc/components/Landing';
import About from '@swc/components/About';
import WhyUs from '@swc/components/WhyUs';
import PopularDestinations from '@swc/components/PopularDestinations';
import PopularProducts from '@swc/components/PopularProducts';
import Partners from '@swc/components/Partners';

const Home: NextPage = () => {
  return (
    <main>
      <section className="flex h-screen w-full">
        <Landing />
      </section>
      {/* <section>
        <About />
      </section> */}
      <section>
        <WhyUs />
      </section>
      <section>
        <PopularDestinations />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section>
        <Partners />
      </section>
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
