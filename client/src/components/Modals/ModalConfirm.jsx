import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useToast,
} from '@chakra-ui/react';
import { useDeleteListMutation } from '../../features/api/listSlice';
import { useNavigate, useParams } from 'react-router-dom';
export const ModalConfirm = ({ isOpen, onClose, onOpen, List, setSeleted }) => {
	const toast = useToast();
	const initialRef = React.useRef(null);
	const [DeleteList] = useDeleteListMutation();
	const params = useParams();
	const navigate = useNavigate();

	function deleteList(list) {
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

		if (Object.values(params)[0].includes(list.name)) {
			navigate('/homepage/myday');
		}
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
