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
	Center,
	Image,
} from '@chakra-ui/react';
import me from '../../assets/me.jpg';

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
					<Center>
						Welcome to my personal app for task management. <br />
						The main functionalities are to create tasks and group them by
						lists, set the priority and expiration date. I hope you enjoy it !{' '}
						<br /> <Image src={me} alt='PabloCarranza' w='30%' />
					</Center>
					<br />
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
