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
} from '@chakra-ui/react';

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
        <Box>
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
        </Box>
      </Flex>
    </Flex>
  );
}

export default DesktopHeader;
