import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link,
  List,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRef } from 'react';
import { useCart } from 'react-use-cart';
import CartItem from '../CartItem';

function Cart(props) {
  const { isOpen, onClose } = props;
  const { items } = useCart();
  const btnRef = useRef();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Meu carrinho</DrawerHeader>
        <DrawerBody>
          {items.length > 0 ? (
            <List>
              {items.map((item) => (
                <CartItem key={item.sku} item={item} />
              ))}
            </List>
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>

          <NextLink href="/checkout" passHref>
            <Button as={Link} colorScheme="blue">Finalizar compra</Button>
          </NextLink>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
