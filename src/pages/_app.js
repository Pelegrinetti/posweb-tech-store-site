import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from 'react-use-cart';

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CartProvider>
    </SessionProvider>
  );
}

export default CustomApp;
