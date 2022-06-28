import { Flex } from '@chakra-ui/react';
import SiteHeader from '../../shared/SiteHeader';
import ProductCard from '../../shared/ProductCard';
import Section from '../../shared/Section';

function Home({ products }) {
  return (
    <>
      <SiteHeader />
      <Flex
        as="main"
        maxWidth={{
          lg: 'container.xl',
        }}
        margin="auto"
        flexDirection="column"
      >
        {products.length > 0 && (
          <Section title="Os melhores produtos">
            {products.map((product) => (
              <ProductCard
                key={product.sku}
                title={product.name}
                gallery={product.gallery}
                price={product.price}
                url={`/product/${product.sku}`}
              />
            ))}
          </Section>
        )}
      </Flex>
    </>
  );
}

export default Home;
