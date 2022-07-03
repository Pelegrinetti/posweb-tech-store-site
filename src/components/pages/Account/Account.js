import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import SiteFooter from '../../shared/SiteFooter';
import SiteHeader from '../../shared/SiteHeader';

function Account() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push('/')
    }
  });
  const toast = useToast();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const payloadData = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      cellphone: data.cellphone,
      addresses: [
        {
          street: data.street,
          cep: data.cep,
          number: parseInt(data.number, 10),
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
          country: data.country,
        },
      ],
    };

    const { techStoreFrontendApi } = getConfig().publicRuntimeConfig;

    try {
      await fetch(`${techStoreFrontendApi}/update-user?id=${session.user.id}`, {
        method: 'PUT',
        body: JSON.stringify(payloadData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast({
        title: 'Dados atualizados!',
        status: 'info',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
        onCloseComplete: () => {
          signOut();
          router.push('/')
        },
      });
    } catch (error) {
      toast({
        title: 'Não foi possível atualizar os dados!',
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      });
    }
  };

  return (
    <>
      <SiteHeader />
      <Box
        as="main"
        minHeight="50vh"
        maxWidth={{
          lg: 'container.xl',
        }}
        margin={{ base: '20px', lg: '20px auto' }}
      >
        <Alert status="info" marginBottom="20px" borderRadius={2}>
          <AlertIcon />
          <AlertTitle>Atualização de dados!</AlertTitle>
          <AlertDescription>
            Ao atualizar os dados sua sessão será encerrada.
          </AlertDescription>
        </Alert>
        <Heading>Minha conta</Heading>
        {session?.user && (
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid
              margin={{
                base: '20px',
                lg: '20px 0 ',
              }}
              columns={{
                base: 1,
                lg: 2,
              }}
              gap={20}
            >
              <Box>
                <Heading as="h3" size="md">
                  Dados pessoais
                </Heading>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="name">Nome:</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={session.user.name}
                    {...register('name')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="email">E-mail:</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    defaultValue={session.user.email}
                    {...register('email')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="cpf">CPF:</FormLabel>
                  <Input
                    id="cpf"
                    name="cpf"
                    defaultValue={session.user.cpf}
                    {...register('cpf')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="cellphone">Celular:</FormLabel>
                  <Input
                    id="cellphone"
                    name="cellphone"
                    defaultValue={session.user.cellphone}
                    {...register('cellphone')}
                  />
                </FormControl>
              </Box>
              <Box>
                <Heading as="h3" size="md">
                  Endereço
                </Heading>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="street">Rua:</FormLabel>
                  <Input
                    id="street"
                    name="street"
                    defaultValue={session.user.addresses?.[0]?.street}
                    {...register('street')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="postal_code">CEP:</FormLabel>
                  <Input
                    id="postal_code"
                    name="postal_code"
                    defaultValue={session.user.addresses?.[0]?.postal_code}
                    {...register('postal_code')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="number">Número:</FormLabel>
                  <Input
                    id="number"
                    name="number"
                    defaultValue={session.user.addresses?.[0]?.number}
                    {...register('number')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="neighborhood">Bairro:</FormLabel>
                  <Input
                    id="neighborhood"
                    name="neighborhood"
                    defaultValue={session.user.addresses?.[0]?.neighborhood}
                    {...register('neighborhood')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="city">Cidade:</FormLabel>
                  <Input
                    id="city"
                    name="city"
                    defaultValue={session.user.addresses?.[0]?.city}
                    {...register('city')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="state">Estado:</FormLabel>
                  <Input
                    id="state"
                    name="state"
                    defaultValue={session.user.addresses?.[0]?.state}
                    {...register('state')}
                  />
                </FormControl>
                <FormControl paddingTop={3}>
                  <FormLabel htmlFor="country">País:</FormLabel>
                  <Input
                    id="country"
                    name="country"
                    defaultValue={session.user.addresses?.[0]?.country}
                    {...register('country')}
                  />
                </FormControl>
              </Box>
            </SimpleGrid>
            <Flex justifyContent="flex-end">
              <Button colorScheme="blue" type="submit">
                Salvar
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
      <SiteFooter />
    </>
  );
}

export default Account;
