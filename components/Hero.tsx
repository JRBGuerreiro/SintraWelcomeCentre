import { useState, type FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';

import swcLogo from '@swc/assets/swc-logo.png';
import MenuIcon from '@swc/utils/svg/Menu';
import CloseIcon from '@swc/utils/svg/Cross';
import LanguageSelector from './LanguageSelector';

const HeroSection: FC = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [styledMenu, animateMenu] = useSpring(() => ({
    from: { opacity: 1, scale: 1 }
  }));

  const [styledSlider, animateSlide] = useSpring(() => ({
    from: { opacity: 0 }
  }));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    animateMenu.start({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 }
    });
    animateSlide.start({
      from: { opacity: 0 },
      to: { opacity: 1 }
    });
  };

  const NavBar: FC = () => {
    return (
      <nav className="flex w-full items-center justify-end space-x-2 p-10">
        <LanguageSelector />
        <animated.span
          style={styledMenu}
          onClick={toggleMenu}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
        >
          {isMenuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </animated.span>
      </nav>
    );
  };

  const InvisibleMenu: FC = () => {
    return (
      <animated.main
        style={styledSlider}
        className="bg-black-100 fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-20 backdrop-blur-lg"
      >
        <NavBar />
        <div className="m-auto h-full max-w-prose p-10">
          <animated.section style={styledSlider} className="py-8">
            abc
          </animated.section>
        </div>
      </animated.main>
    );
  };

  return (
    <>
      <div className="flex flex-1 flex-col bg-hero bg-cover bg-center bg-no-repeat">
        <div className="flex h-full flex-col bg-black/50">
          <NavBar />

          <section className="flex h-full flex-col items-center justify-between py-20 px-10">
            <Image src={swcLogo} alt="Sintra Welcome Centre" className="w-96" />
            <div className="laptop:w-1/2 laptop:px-10">
              <h1 className="font-sans text-5xl font-bold shadow laptop:text-7xl">
                {t('landing')}
              </h1>
              <span className="flex justify-start pt-2 text-[8px]">
                © 2021 SINTRA WELCOME CENTRE, TRADEMARKS AND BRAND ARE THE
                PROPERTY OF THEIR RESPECTIVE
              </span>
            </div>
          </section>
        </div>
      </div>
      {isMenuOpen && <InvisibleMenu />}
    </>
  );
};

export default HeroSection;
