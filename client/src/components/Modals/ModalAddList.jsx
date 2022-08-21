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
} from '@chakra-ui/react';
import Swal from 'sweetalert2';

export const ModalAddList = ({ isOpen, onClose }) => {
	const handleClick = () => {
		onClose();
	};

	const Toast = Swal.mixin({
		toast: true,
		position: 'bottom-start',
		showConfirmButton: false,
		timer: 2000,
		timerProgressBar: true,
		background: '#1f2b43',
		color: '#ffffff',
		didOpen: toast => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	const initialRef = React.useRef(null);
	const [input, setInput] = React.useState('');

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = async () => {
		if (input.length === 0) {
			setInput('');

			Toast.fire({
				icon: 'error',
				title: `The field cant be empty`,
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
				<ModalOverlay />
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
						<Button colorScheme='blue' mr={3} onClick={handleSubmit}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
