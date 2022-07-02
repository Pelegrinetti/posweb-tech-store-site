import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsCart, BsPlus } from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import SiteFooter from '../../shared/SiteFooter';
import SiteHeader from '../../shared/SiteHeader';

function Product(props) {
  const { product } = props;
  const { name, description, gallery, price } = product;
  const [image] = gallery;
  const router = useRouter();
  const toast = useToast();
  const { addItem } = useCart();

  const handleOnBuyClick = (item) => {
    addItem(item, 1);

    router.push('/checkout', null, {
      shallow: true,
    });
  };

  return (
    <>
      <SiteHeader />
      <SimpleGrid
        as="main"
        width="100%"
        maxWidth={{
          lg: 'container.xl',
        }}
        margin="auto"
        padding={{
          base: 4,
          lg: '16px 0 16px 0',
        }}
        gap={2}
        columns={{
          base: 1,
          lg: 2,
        }}
      >
        <Flex justifyContent="center" alignItems="center">
          <Image src={image.url} alt={image.description} />
        </Flex>
        <Stack gap={2}>
          <Heading>{name}</Heading>
          <Text>{description}</Text>
          <Box>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            <Box as="span" color="gray.600" fontSize="sm">
              {' '}
              / unidade
            </Box>
          </Box>
          <Divider />
          <Stack direction="row">
            <Button
              onClick={() => {
                toast({
                  title: 'Item adicionado ao carrinho!',
                  description:
                    'Item adicionado, você pode abrir o carrinho e concluir a compra.',
                  status: 'success',
                  duration: 5000,
                  position: 'bottom-right',
                  isClosable: true,
                });
                addItem(product);
              }}
            >
              <Icon as={BsPlus} /> <Icon as={BsCart} />
            </Button>
            <Button colorScheme="blue" onClick={() => handleOnBuyClick(product)}>
              Comprar agora
            </Button>
          </Stack>
        </Stack>
      </SimpleGrid>
      <SiteFooter />
    </>
  );
}

export default Product;
