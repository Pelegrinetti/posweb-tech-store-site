import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import getConfig from 'next/config';
import { useRef } from 'react';
import { BsTrash } from 'react-icons/bs';

function RemoveProduct(props) {
  const { sku } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  const handleOnDelete = async () => {
    const { techStoreFrontendApi } = getConfig().publicRuntimeConfig;

    try {
      const response = await fetch(
        `${techStoreFrontendApi}/product?sku=${sku}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      toast({
        title: 'Deletado com sucesso!',
        status: 'success',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro ao remover!',
        description: 'Houve um erro ao remover o produto, tente mais tarde.',
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      });
    }

    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Remover produto"
        colorScheme="red"
        size="lg"
        icon={<BsTrash />}
        onClick={onOpen}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remover produto
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem certeza que deseja remover este produto? Não será
              possível desfazer essa ação.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleOnDelete} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default RemoveProduct;
