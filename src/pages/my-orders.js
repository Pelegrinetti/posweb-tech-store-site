import { getServerSession } from 'next-auth/next';
import { nextAuthOptions } from './api/auth/[...nextauth]';
import MyOrdersPage from '../components/pages/MyOrders';

export async function getServerSideProps(ctx) {
  const session = await getServerSession(ctx, nextAuthOptions);

  if (!session && !session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await fetch(
    `${process.env.TECH_STORE_SHOP_API_BASE_URL}/orders/${session.user.id}`
  );
  const data = await response.json();

  return {
    props: {
      orders: data,
    },
  };
}

export default MyOrdersPage;
