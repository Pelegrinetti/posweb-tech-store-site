import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';
import getConfig from 'next/config';

function CustomApp({ Component, pageProps }) {
  const { googleClientId, techStoreFrontendApi } = getConfig().publicRuntimeConfig;

  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
      <div
        id="g_id_onload"
        data-client_id={googleClientId}
        data-login_uri={`${techStoreFrontendApi}/login`}
      />
    </>
  );
}

export default CustomApp;
