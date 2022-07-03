import {
  Avatar,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';
import { BsCart, BsGoogle } from 'react-icons/bs';
import Cart from '../../Cart';
import Logo from '../../Logo';

function DesktopHeader() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: cartIsOpen,
    onToggle: cartOnToggle,
    onClose: cartOnClose,
  } = useDisclosure();
  const { data: session } = useSession();
  const { user } = session || {};

  return (
    <Flex as="header" justifyContent="center" borderWidth="thin" padding="7">
      <Flex
        width="container.xl"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <Flex gap="20px">
          <Link href="/">Melhores produtos</Link>
          <Link href="/">Promoções</Link>
          <Link href="/">Tech Day</Link>
          <Link href="/">PC Gamers</Link>
        </Flex>
        <Flex justifyContent="center" alignItems="center" gap={4}>
          <Button
            variant="unstyled"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={cartOnToggle}
          >
            <Icon as={BsCart} fontSize={20} />
          </Button>
          {session ? (
            <Menu>
              {() => (
                <>
                  <MenuButton variant="unstyled" border="none">
                    <Avatar name={user.name} src={user.image} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NextLink href="/account" passHref>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link>
                          Minha conta
                        </Link>
                      </NextLink>
                    </MenuItem>
                    <MenuItem>Pedidos</MenuItem>
                    <MenuItem onClick={() => signOut()}>Sair</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          ) : (
            <>
              <Button
                variant="unstyled"
                borderStyle="none"
                onClick={onOpen}
                _focus={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              >
                <Avatar />
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Entrar na Tech Store</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Ao acessar sua conta você pode comprar eletronicos
                      maneiros!
                    </Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      onClick={() => signIn('google')}
                      width="100%"
                    >
                      <Icon as={BsGoogle} marginRight={3} />
                      Entrar usando sua conta do Google
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )}
        </Flex>
      </Flex>
      <Cart isOpen={cartIsOpen} onClose={cartOnClose} />
    </Flex>
  );
}

export default DesktopHeader;
