import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	FormControl,
	FormLabel,
	Input,
	useToast,
} from '@chakra-ui/react';
import { useDeleteListMutation } from '../../features/api/listSlice';

export const ModalConfirm = ({ isOpen, onClose, onOpen, List, setSeleted }) => {
	const toast = useToast();
	const initialRef = React.useRef(null);
	const [DeleteList] = useDeleteListMutation();

	function deleteList(list) {
		console.log('desde el modal', list);
		DeleteList(list.id)
			.unwrap()
			.then(respon => {
				toast({
					title: 'Success.',
					description: `${respon.message}`,
					status: 'success',
					duration: 3000,
					isClosable: true,
				});
				onClose();
			})
			.catch(error => {
				toast({
					title: 'Error',
					description: `${error.data.message}`,
					status: 'error',
					duration: 2000,
					isClosable: true,
				});
			});
		setSeleted({});
		onClose();
	}

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				isCentered
			>
				<ModalContent bg='#1A202C'>
					<ModalHeader>Delete {List.name} task list</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						Are you sure? You can't undo this action afterwards.
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
						<Button
							colorScheme='red'
							mr={3}
							onClick={() => deleteList(List)}
							ml='4px'
						>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
