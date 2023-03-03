import { useState, type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { animated, useSpring } from '@react-spring/web';

import ArrowDown from '@swc/components/svg/ArrowDown';
import { LANGUAGES } from '@swc/utils/constants';

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [styledLanguage, animateLanguage] = useSpring(() => ({
    from: { opacity: 1, scale: 1 }
  }));

  const toggleAnimation = () => {
    animateLanguage.start({
      from: {
        opacity: 0,
        scale: 0
      },
      to: {
        opacity: 1,
        scale: 1
      }
    });
  };

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    router.replace({ pathname, query }, asPath, {
      locale: newLanguage
    });
  };

  return (
    <div className="flex flex-col">
      <section
        className="flex cursor-pointer items-center justify-center font-inter transition-all hover:text-forest-green"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div
          onClick={toggleAnimation}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
        >
          <span className="text-gray mx-1 text-sm font-bold">
            {i18n.language.toUpperCase()}
          </span>
          <ArrowDown className="h-3 w-3" />
        </div>

        {/* <span className="text-gray mx-1 text-sm font-bold">
          {i18n.language.toUpperCase()}
        </span>
        <ArrowDown className="h-3 w-3" /> */}
      </section>

      <animated.section
        style={styledLanguage}
        onClick={toggleAnimation}
        className={`absolute top-20 flex w-14 flex-col items-center justify-center rounded-lg bg-black bg-opacity-10 shadow backdrop-blur-lg ${
          !isDropdownOpen && 'hidden'
        }`}
      >
        <div className="text-gray-700 flex flex-col space-y-1 py-2 text-sm">
          {LANGUAGES.sort().map((language) => (
            <a
              key={language}
              onClick={() => handleLanguageChange(language)}
              className={`${
                language === i18n.language && 'text-light-green'
              } cursor-pointer px-4 py-2 font-bold hover:text-forest-green`}
            >
              {language.toUpperCase()}
            </a>
          ))}
        </div>
      </animated.section>
    </div>
  );
};

export default LanguageSelector;
