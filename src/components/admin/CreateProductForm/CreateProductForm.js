import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import getConfig from 'next/config';
import Media from 'react-media';
import { useForm } from 'react-hook-form';
import { slugify } from '../utils';

function CreateProductForm(props) {
  const { isOpen, onClose } = props;
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    const { techStoreFrontendApi } = getConfig().publicRuntimeConfig;
    const tags = data.tags.split(',').map((item) => ({
      name: item.trim(),
      slug: slugify(item),
    }));

    try {
      const response = await fetch(`${techStoreFrontendApi}/product`, {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          description: data.description,
          price: parseInt(data.price, 10),
          tags,
          gallery: [
            {
              url: data.image,
              description: data.imageDescription,
            },
          ],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      toast({
        title: 'Produto criado com sucesso!',
        isClosable: true,
        position: 'bottom-right',
        status: 'success',
      });
      reset();
    } catch (error) {
      toast({
        title: 'Falha ao criar o produto!',
        isClosable: true,
        position: 'bottom-right',
        status: 'error',
      });
    }

    onClose();
  };

  return (
    <Media query={{ minWidth: '1200px' }} defaultMatches={false}>
      {(match) => (
        <Modal isOpen={isOpen} onClose={onClose} size={match ? 'lg' : 'full'}>
          <ModalOverlay />
          <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Criar produto</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="name">Nome:</FormLabel>
                <Input id="name" {...register('name')} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="description">Descrição:</FormLabel>
                <Textarea id="description" {...register('description')} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="price">Preço:</FormLabel>
                <NumberInput>
                  <NumberInputField id="price" min={1} {...register('price')} />
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="tags">Tags:</FormLabel>
                <Input id="tags" {...register('tags')} />
                <FormHelperText>
                  Separe por vírgula, exemplo: Promoção, Desconto, ...
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="image">Imagem:</FormLabel>
                <Input id="image" {...register('image')} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="imageDescription">
                  Descrição da imagem:
                </FormLabel>
                <Input
                  id="imageDescription"
                  {...register('imageDescription')}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                onClick={() => {
                  reset();
                  onClose();
                }}
              >
                Cancelar
              </Button>
              <Button colorScheme="blue" type="submit">
                Criar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Media>
  );
}

export default CreateProductForm;
