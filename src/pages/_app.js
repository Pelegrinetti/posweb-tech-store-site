import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default CustomApp;
