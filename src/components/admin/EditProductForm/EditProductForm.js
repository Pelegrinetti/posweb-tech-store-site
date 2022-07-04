import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import getConfig from 'next/config';
import Media from 'react-media';
import { useForm } from 'react-hook-form';
import { BsPencil } from 'react-icons/bs';
import { slugify } from '../utils';

function EditProductForm(props) {
  const { product } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    const { techStoreFrontendApi } = getConfig().publicRuntimeConfig;
    const tags = data.tags.split(',').map((item) => ({
      name: item.trim(),
      slug: slugify(item),
    }));

    try {
      const response = await fetch(
        `${techStoreFrontendApi}/product?sku=${product.sku}`,
        {
          method: 'PUT',
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
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      toast({
        title: 'Produto editado com sucesso!',
        isClosable: true,
        position: 'bottom-right',
        status: 'success',
      });
    } catch (error) {
      toast({
        title: 'Falha ao editar o produto!',
        isClosable: true,
        position: 'bottom-right',
        status: 'error',
      });

      reset();
    }

    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Editar"
        colorScheme="yellow"
        size="lg"
        icon={<BsPencil />}
        onClick={onOpen}
      />
      <Media query={{ minWidth: '1200px' }} defaultMatches={false}>
        {(match) => (
          <Modal isOpen={isOpen} onClose={onClose} size={match ? 'lg' : 'full'}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>Editar produto</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel htmlFor="name">Nome:</FormLabel>
                  <Input
                    id="name"
                    defaultValue={product.name}
                    {...register('name')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description">Descrição:</FormLabel>
                  <Textarea
                    id="description"
                    defaultValue={product.description}
                    {...register('description')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="price">Preço:</FormLabel>
                  <NumberInput id="price" defaultValue={product.price} min={1}>
                    <NumberInputField {...register('price')} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="tags">Tags:</FormLabel>
                  <Input
                    id="tags"
                    defaultValue={product.tags
                      .map((item) => item.name)
                      .join(', ')}
                    {...register('tags')}
                  />
                  <FormHelperText>
                    Separe por vírgula, exemplo: Promoção, Desconto, ...
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="image">Imagem:</FormLabel>
                  <Input
                    id="image"
                    defaultValue={product.gallery[0].url}
                    {...register('image')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="imageDescription">
                    Descrição da imagem:
                  </FormLabel>
                  <Input
                    id="imageDescription"
                    defaultValue={product.gallery[0].description}
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
                  Salvar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Media>
    </>
  );
}

export default EditProductForm;
