import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import { SiVisa, SiMastercard } from 'react-icons/si';
import Media from 'react-media';
import Logo from '../Logo';

function SiteFooter() {
  return (
    <Media query={{ minWidth: '1200px' }} defaultMatches={false}>
      {(match) => (
        <Box as="footer" borderWidth={1}>
          <Flex
            maxWidth={{
              lg: 'container.xl',
            }}
            margin={`24px ${!match ? '24px' : 'auto'}`}
            flexDirection={!match ? 'column' : 'row'}
            justifyContent="space-between"
            gap={4}
          >
            <Logo />
            <Box>
              <Heading as="h3" size="md">
                Formas de pagamento
              </Heading>
              <Flex fontSize="6xl" gap={2}>
                <Icon as={SiVisa} />
                <Icon as={SiMastercard} />
              </Flex>
            </Box>
          </Flex>
          <Divider />
          <Box
            maxWidth={{
              lg: 'container.xl',
            }}
            margin={`24px ${!match ? '24px' : 'auto'}`}
          >
            <Text fontSize="14px">
              TECH STORE S.A. CNPJ: 12.345.678 / 0001-90 - Endereço: IFSP,
              Brasil. Tech Store © Copyright 2022.
            </Text>
          </Box>
        </Box>
      )}
    </Media>
  );
}

export default SiteFooter;
