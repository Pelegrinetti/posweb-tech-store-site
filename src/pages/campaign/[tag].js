import HomePage from '../../components/pages/Home';

export const getServerSideProps = async (ctx) => {
  const { tag } = ctx.params;
  const response = await fetch(
    `${process.env.TECH_STORE_SHOP_API_BASE_URL}/products/tag/${tag}`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

export default HomePage;
