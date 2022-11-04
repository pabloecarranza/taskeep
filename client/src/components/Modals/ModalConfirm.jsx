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
import useDeleteList from './../../Hooks/useDeleteList';
export const ModalConfirm = ({ isOpen, onClose, onOpen, List, setSeleted }) => {
	const initialRef = React.useRef(null);

	const [deleteList] = useDeleteList(onClose, setSeleted);

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
						Are you sure? You can't undo this action afterwards and all task
						assigned to this list be eliminated
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
