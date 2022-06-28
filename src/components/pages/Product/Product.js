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
} from '@chakra-ui/react';
import { BsCart, BsPlus } from 'react-icons/bs';
import SiteHeader from '../../shared/SiteHeader';

function Product(props) {
  const { product } = props;
  const { name, description, gallery, price } = product;
  const [image] = gallery;

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
            <Button>
              <Icon as={BsPlus} /> <Icon as={BsCart} />
            </Button>
            <Button colorScheme="blue">Comprar agora</Button>
          </Stack>
        </Stack>
      </SimpleGrid>
    </>
  );
}

export default Product;
