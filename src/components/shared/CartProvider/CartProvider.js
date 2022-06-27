import { useDisclosure } from '@chakra-ui/react';
import React, { useMemo } from 'react';

export const CartContext = React.createContext();

function CartProvider({ children }) {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const items = useMemo(() => [], []);

  const value = useMemo(
    () => ({ isOpen, onClose, onOpen, onToggle, items }),
    [isOpen, onClose, onOpen, onToggle, items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
