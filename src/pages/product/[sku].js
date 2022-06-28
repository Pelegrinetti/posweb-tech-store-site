import getConfig from 'next/config';
import ProductPage from '../../components/pages/Product';

export async function getServerSideProps(ctx) {
  const { techStoreFrontendApi } = getConfig().publicRuntimeConfig;
  const { sku } = ctx.params;

  const response = await fetch(`${techStoreFrontendApi}/product?sku=${sku}`);
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}

export default ProductPage;
