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
    from: { x: -100, opacity: 0 }
  }));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    animateMenu.start({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 }
    });
    animateSlide.start({
      from: { x: -100, opacity: 0 },
      to: { x: 0, opacity: 1 }
    });
  };

  return (
    <div className="flex flex-1 flex-col bg-hero bg-cover bg-center bg-no-repeat">
      <div className="flex h-full flex-col bg-black/50">
        <nav className="flex w-full items-center justify-end space-x-4 p-10">
          <LanguageSelector />
          <animated.span
            style={styledMenu}
            onClick={toggleMenu}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            {isMenuOpen ? (
              <CloseIcon className="h-7 w-7" />
            ) : (
              <MenuIcon className="h-7 w-7" />
            )}
          </animated.span>
        </nav>
        <section className="flex h-full flex-col items-center justify-between py-40 px-10">
          <Image src={swcLogo} alt="Sintra Welcome Centre" className="w-96" />
          <div>
            <h1 className="font-sans text-4xl font-bold tablet:text-6xl laptop:text-8xl">
              {t('landing')}
            </h1>
            <span className="flex justify-end pt-2 text-[8px]">
              © 2021 SINTRA WELCOME CENTRE, TRADEMARKS AND BRAND ARE THE
              PROPERTY OF THEIR RESPECTIVE
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
