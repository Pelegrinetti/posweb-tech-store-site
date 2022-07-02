import dynamic from 'next/dynamic';

const CheckoutPage = dynamic(import('../components/pages/Checkout'), {
  ssr: false,
});

export default CheckoutPage;
