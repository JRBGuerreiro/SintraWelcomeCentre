import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import '@swc/styles/globals.css';
import i18n from '../next-i18next.config.js';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp, i18n);
