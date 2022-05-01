import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Icon,
  Button,
} from '@chakra-ui/react';
import { BsCart } from 'react-icons/bs';

function DesktopHeader() {
  const user = {
    name: 'Foo Bar',
  };

  return (
    <Flex justifyContent="center" borderWidth="thin" padding="7">
      <Flex
        width="container.xl"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontWeight="bold">Tech Store</Text>
        </Box>
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
          >
            <Icon as={BsCart} fontSize={20} />
          </Button>
          <Menu>
            {() => (
              <>
                <MenuButton variant="unstyled" border="none">
                  <Avatar name={user.name} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Minha conta</MenuItem>
                  <MenuItem>Pedidos</MenuItem>
                  <MenuItem>Sair</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DesktopHeader;
