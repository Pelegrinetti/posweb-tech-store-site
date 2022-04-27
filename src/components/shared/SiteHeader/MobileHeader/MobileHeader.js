import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function MobileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = {
    name: 'Foo Bar',
  };

  return (
    <>
      <Flex
        as="header"
        borderWidth="1px"
        padding={3}
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Button variant="ghost" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Text fontWeight="bold">Tech Store</Text>
        <Avatar name={user.name} />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex gap="3" alignItems="baseline">
              <Avatar name={user.name} />
              <Text fontSize="lg" isTruncated maxWidth="70%">
                {user.name}
              </Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection="column" gap="20px" paddingBottom="20px">
              <Link href="/account">Minha conta</Link>
              <Link href="/orders">Pedidos</Link>
            </Flex>
            <Divider />
            <Flex flexDirection="column" gap="20px" marginTop="20px">
              <Link href="/">Melhores produtos</Link>
              <Link href="/">Promoções</Link>
              <Link href="/">Tech Day</Link>
              <Link href="/">PC Gamers</Link>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button width="100%" variant="solid" colorScheme="blue">
              Sair
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileHeader;
