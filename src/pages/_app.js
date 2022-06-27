import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import CartProvider from '../components/shared/CartProvider';

function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default CustomApp;
