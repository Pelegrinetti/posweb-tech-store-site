import { Grid, Heading, Box } from '@chakra-ui/react';

function Section(props) {
  const { title, children } = props;

  return (
    <Box
      as="section"
      width="100%"
      padding={{
        base: 4,
        lg: '16px 0 16px 0',
      }}
    >
      <Heading marginBottom={4}>{title}</Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
        marginBottom={4}
      >
        {children}
      </Grid>
    </Box>
  );
}

export default Section;
