import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import SiteFooter from '../../shared/SiteFooter';
import SiteHeader from '../../shared/SiteHeader';

function Product(props) {
  const { orders } = props;

  return (
    <>
      <SiteHeader />
      <Container
        maxWidth={{
          lg: 'container.xl',
        }}
        margin="auto"
        marginTop={10}
        marginBottom={20}
      >
        <Heading>Meus pedidos</Heading>
        <Accordion allowToggle marginTop={10}>
          {orders.map((order) => (
            <AccordionItem key={order.id}>
              <h2>
                <AccordionButton>
                  <Box display="flex" flex="1" flexWrap="nowrap">
                    <span>Pedido {`#${order.id}`}</span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table variant="striped">
                    <Thead>
                      <Tr>
                        <Th>Preview</Th>
                        <Th>SKU</Th>
                        <Th>Nome</Th>
                        <Th isNumeric>Quantidade</Th>
                        <Th isNumeric>Preço</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {order.order_items.map((item) => (
                        <Tr key={item.sku}>
                          <Td>
                            <Image
                              width={20}
                              src={item.product.gallery[0].url}
                              alt={item.product.gallery[0].description}
                            />
                          </Td>
                          <Td>{item.product.sku}</Td>
                          <Td>{item.product.name}</Td>
                          <Td isNumeric>{item.quantity}</Td>
                          <Td isNumeric>
                            {item.product.price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th colSpan={4} />
                        <Th isNumeric>Total</Th>
                      </Tr>
                      <Tr>
                        <Td colSpan={4} />
                        <Td isNumeric>
                          {order.total.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </Td>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
      <SiteFooter />
    </>
  );
}

export default Product;
