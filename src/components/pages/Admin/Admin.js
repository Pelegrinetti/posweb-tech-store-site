import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';
import CreateProductForm from '../../admin/CreateProductForm';
import EditProductForm from '../../admin/EditProductForm';
import RemoveProduct from '../../admin/RemoveProduct';

function Admin(props) {
  const { products } = props;
  const {
    isOpen: createProductIsOpen,
    onClose: createProductOnClose,
    onOpen: createProductOnOpen,
  } = useDisclosure();

  return (
    <>
      <Box borderWidth="1px" padding="20px 0">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          maxWidth={{
            lg: 'container.xl',
          }}
        >
          <Text fontWeight="bold" fontSize="2xl">
            Tech Admin
          </Text>
          <IconButton
            aria-label="Adicionar produto"
            colorScheme="green"
            size="lg"
            onClick={createProductOnOpen}
            icon={<BsPlus />}
          />
        </Container>
      </Box>
      <Box as="main">
        <Container
          padding="20px"
          maxWidth={{
            lg: 'container.xl',
          }}
        >
          <Heading marginBottom={3}>Produtos</Heading>
          <Box>
            {products.map((product) => (
              <SimpleGrid
                key={product.sku}
                borderWidth={1}
                borderRadius={2}
                width="100%"
                padding={4}
                marginBottom={2}
                gap={{
                  base: 2,
                }}
                templateColumns={{
                  lg: '10% 50% 20% 20%',
                }}
                columns={{
                  base: 1,
                  md: 4,
                }}
              >
                <Image
                  src={product.gallery[0].url}
                  alt={product.gallery[0].description}
                  height={{ md: '120px' }}
                  justifySelf={{
                    base: 'center',
                    lg: 'auto',
                  }}
                />
                <Box alignSelf="center">
                  <Text fontWeight="bold" fontSize="xl">
                    {product.name}
                  </Text>
                  <Text noOfLines={1}>{product.description}</Text>
                </Box>
                <Box justifySelf={{ lg: 'center' }} alignSelf="center">
                  <Text fontWeight="bold" fontSize="xl">
                    Preço:
                  </Text>
                  <Text as="span">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                </Box>
                <Flex justifySelf="center" alignSelf="center" gap={2}>
                  <EditProductForm product={product} />
                  <RemoveProduct sku={product.sku} />
                </Flex>
              </SimpleGrid>
            ))}
          </Box>
        </Container>
      </Box>
      <CreateProductForm
        isOpen={createProductIsOpen}
        onClose={createProductOnClose}
      />
    </>
  );
}

export default Admin;
