import { useEffect } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    console.log('¯\_(ツ)_/¯');
  }, []);
  
  return <Component {...pageProps} />;
}

export default MyApp;
