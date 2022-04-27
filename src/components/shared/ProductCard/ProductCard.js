import { StarIcon } from '@chakra-ui/icons';
import { Box, Image, Link } from '@chakra-ui/react';

function ProductCard(props) {
  const { title, image, price, rating, url } = props;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      as={Link}
      href={url}
      width="100%"
    >
      <Image
        src={image.url}
        alt={image.description}
        width="100%"
        height="250px"
        objectFit="cover"
        objectPosition="center"
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
          <Box as="span" color="gray.600" fontSize="sm">
            {' '}
            / unidade
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, index) => (
              <StarIcon
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                color={index < rating ? 'gray' : 'yellow'}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
