import AdminPage from '../../components/pages/Admin';

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

export default AdminPage;
