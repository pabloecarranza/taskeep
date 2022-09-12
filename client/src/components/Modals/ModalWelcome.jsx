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
} from '@chakra-ui/react';

export const ModalWelcome = ({ isOpen, onClose, setIsloaded }) => {
	const handleClick = () => {
		onClose();
		setIsloaded(v => !v);
	};

	const userData = JSON.parse(localStorage.getItem('identified-user'));

	return (
		<Modal isOpen={isOpen} onClose={handleClick} isCentered size='lg'>
			<ModalOverlay />
			<ModalContent bg='#1A202C'>
				<ModalHeader>Hi {userData.username}!</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					Welcome to my personal app for task management. <br />
					The main functionalities are to create tasks and group them by lists,
					set the priority and expiration date and most importantly the
					collaborative use assigning tasks to other users and receiving tasks,
					I hope you enjoy it ! <br /> <br />
					Pablo
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={handleClick}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
