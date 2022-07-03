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
  Icon,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsCart } from 'react-icons/bs';
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, useSession } from 'next-auth/react';
import Cart from '../../Cart';
import Logo from '../../Logo';

function MobileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: cartIsOpen,
    onClose: cartOnClose,
    onToggle: cartOnToggle,
  } = useDisclosure();
  const { data: session } = useSession();
  const { user } = session || {};

  return (
    <>
      <Flex
        as="header"
        borderWidth="1px"
        padding={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="ghost" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Logo />
        <Button
          variant="unstyled"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={cartOnToggle}
        >
          <Icon as={BsCart} />
        </Button>
      </Flex>
      <Cart isOpen={cartIsOpen} onClose={cartOnClose} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box>
              {session ? (
                <Flex gap="3" alignItems="center">
                  <Avatar name={user.name} src={user.image} />
                  <Text fontSize="lg" isTruncated maxWidth="70%">
                    {user.name}
                  </Text>
                </Flex>
              ) : (
                <Flex gap="3" alignItems="center">
                  <Avatar />
                  <Button variant="unstyled" onClick={() => signIn('google')}>
                    <Text fontSize="lg">Entrar</Text>
                  </Button>
                </Flex>
              )}
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection="column" gap="20px" paddingBottom="20px">
              <NextLink href="/account" passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link>Minha conta</Link>
              </NextLink>
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
