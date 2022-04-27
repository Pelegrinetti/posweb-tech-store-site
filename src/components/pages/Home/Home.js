import { Flex } from '@chakra-ui/react';
import SiteHeader from '../../shared/SiteHeader';
import ProductCard from '../../shared/ProductCard';
import Section from '../../shared/Section';

function Home() {
  const product = {
    title: 'PC Top',
    image: {
      url: 'https://via.placeholder.com/300x300/09f.png/fff',
      description: 'Lets bora',
    },
    price: 3000,
    rating: 5,
    url: 'http://localhost',
  };

  return (
    <>
      <SiteHeader />
      <Flex
        maxWidth={{
          lg: 'container.xl',
        }}
        margin="auto"
        flexDirection="column"
      >
        <Section title="Os melhores produtos">
          {[...Array(8)].map((item, i) => (
            <ProductCard
              key={i}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </Section>
        <Section title="Os melhores produtos">
          {[...Array(8)].map((item, i) => (
            <ProductCard
              key={i}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </Section>
        <Section title="Os melhores produtos">
          {[...Array(8)].map((item, i) => (
            <ProductCard
              key={i}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </Section>
      </Flex>
    </>
  );
}

export default Home;
