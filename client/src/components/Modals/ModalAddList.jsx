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

export const ModalAddList = ({ isOpen, onClose }) => {
	const toast = useToast();
	const handleClick = () => {
		onClose();
	};

	const initialRef = React.useRef(null);
	const [input, setInput] = React.useState('');

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = async () => {
		if (input.length === 0) {
			setInput('');

			toast({
				title: 'Warning.',
				description: 'The field list name cant by empty.',
				status: 'warning',
				duration: 2000,
				isClosable: true,
			});

			return;
		} else {
			//aca hacer el POST
		}
	};

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={handleClick}
				isCentered
			>
				<ModalContent bg='#1A202C'>
					<ModalHeader>Create a new task list</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>List name</FormLabel>
							<Input
								ref={initialRef}
								placeholder='Write here...'
								value={input}
								onChange={handleChange}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue' mr={3} onClick={handleSubmit} ml='4px'>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
