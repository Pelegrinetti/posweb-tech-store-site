import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import { useCart } from 'react-use-cart';

function CartItem(props) {
  const { item } = props;
  const [image] = item.gallery;
  const { removeItem, updateItemQuantity } = useCart();

  return (
    <ListItem
      padding={2}
      borderWidth={1}
      borderRadius="5px"
      listStyleType="none"
      gap={2}
      marginBottom={2}
    >
      <Flex>
        <Image
          src={image.url}
          alt={image.description}
          width="100px"
          height="100px"
          objectFit="cover"
          objectPosition="center"
        />
        <Box>
          <Heading as="h4" size="md">
            {item.name}
          </Heading>
          <Text noOfLines={2}>{item.description}</Text>
          <Box>
            {item.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            <Box as="span" color="gray.600" fontSize="sm">
              {' '}
              / unidade
            </Box>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box padding={2}>
        <FormControl alignItems="baseline">
          <FormLabel htmlFor="quantity">Quantidade:</FormLabel>
          <NumberInput
            id="quantity"
            defaultValue={item.quantity}
            min={1}
            marginBottom={2}
            onChange={(value) =>
              updateItemQuantity(item.id, parseInt(value, 10))
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Box>
            <Button onClick={() => removeItem(item.id)} colorScheme="red">
              Remover
            </Button>
          </Box>
        </FormControl>
      </Box>
    </ListItem>
  );
}

export default CartItem;
