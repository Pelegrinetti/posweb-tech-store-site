import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
} from '@chakra-ui/react';
import { useContext, useRef } from 'react';
import CartItem from '../CartItem';
import { CartContext } from '../CartProvider';

function Cart() {
  const { isOpen, onClose, items } = useContext(CartContext);
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
          <Button colorScheme="blue">Finalizar compra</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
