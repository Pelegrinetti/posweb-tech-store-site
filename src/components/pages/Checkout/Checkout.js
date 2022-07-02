import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useCart } from 'react-use-cart';
import QRCode from 'react-qr-code';
import getConfig from 'next/config';
import { useSession } from 'next-auth/react';
import SiteFooter from '../../shared/SiteFooter';
import SiteHeader from '../../shared/SiteHeader';

function CheckoutPage() {
  const { items, cartTotal, emptyCart } = useCart();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: session } = useSession();

  const handleOnFinishOrder = async () => {
    const { techStoreFrontendApi } = getConfig().publicRuntimeConfig;

    await fetch(`${techStoreFrontendApi}/order`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: session.user.id,
        total: cartTotal,
        cep: session.user.addresses?.[0]?.postal_code,
        payment_method: 'pix',
        items: items.map(item => ({
          productsId: item.id,
          quantity: item.quantity
        })),
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    emptyCart();
    onOpen();
  };

  return (
    <>
      <SiteHeader />
      <Flex
        as="main"
        minHeight="50vh"
        maxWidth={{
          lg: 'container.xl',
        }}
        margin={{ base: '20px', lg: '20px auto' }}
        flexDirection="column"
      >
        <Heading>Checkout</Heading>
        <Box margin="20px 0 0 0">
          <Heading as="h2" size="md">
            Forma de pagamento
          </Heading>
          <Box margin="20px 0">
            <Tag size="lg" variant="solid" colorScheme="teal">
              Pix
            </Tag>
          </Box>
        </Box>
        <Box margin="20px 0">
          <Heading as="h2" size="md">
            Itens
          </Heading>
          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>SKU</Th>
                  <Th>Nome</Th>
                  <Th isNumeric>Quantidade</Th>
                  <Th isNumeric>Preço</Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((item) => (
                  <Tr key={item.sku}>
                    <Td>{item.sku}</Td>
                    <Td>{item.name}</Td>
                    <Td isNumeric>{item.quantity}</Td>
                    <Td isNumeric>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Td>
                  </Tr>
                ))}
                <Tr>
                  <Td />
                  <Td />
                  <Td />
                  <Td isNumeric>
                    {cartTotal.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th colSpan={3} />
                  <Th isNumeric>Total</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <Flex flexDirection="row-reverse">
          <Button onClick={handleOnFinishOrder} colorScheme="blue">
            Finalizar
          </Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pagamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Faça a leitura do QR Code abaixo para concluir seu pagamento.
            </Text>
            <Flex justifyContent="center" margin={3}>
              <QRCode value="/" />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SiteFooter />
    </>
  );
}

export default CheckoutPage;
