import { type NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Landing from '@swc/components/Landing';
import About from '@swc/components/About';
import WhyUs from '@swc/components/WhyUs';
import PopularDestinations from '@swc/components/Destinations';
import PopularProducts from '@swc/components/Products';
import Partners from '@swc/components/Partners';
import CuratedTestimonials from '@swc/components/Testimonials';

const Home: NextPage = () => {
  return (
    <main>
      <section className="flex h-screen w-full">
        <Landing />
      </section>
      {/* <About />*/}
      <WhyUs />
      <PopularDestinations />
      <PopularProducts />
      {/* <Partners /> */}
      <CuratedTestimonials />
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
