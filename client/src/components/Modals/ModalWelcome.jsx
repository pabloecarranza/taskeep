import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Center,
	Image,
} from '@chakra-ui/react';
import me from '../../assets/me.jpg';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ModalWelcome = ({
	isOpen,
	onClose,
	setIsloaded,
	greeting,
	welcome_text_1,
	welcome_text_2,
	name,
	button_text,
}) => {
	const handleClick = () => {
		onClose();
		setIsloaded(v => !v);
	};

	const userData = useSelector(state => state.session);

	return (
		<Modal isOpen={isOpen} onClose={handleClick} isCentered size='lg'>
			<ModalOverlay />
			<ModalContent bg='#1A202C'>
				<ModalHeader>
					{greeting} {userData ? userData.username : ''}!
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Center>
						{welcome_text_1}
						<br />
						{welcome_text_2}
						<Image src={me} alt='PabloCarranza' w='30%' />
					</Center>
					<br />
					{name}
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={handleClick}>
						{button_text}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

ModalWelcome.propTypes = {
	greeting: PropTypes.string.isRequired,
	welcome_text_1: PropTypes.string.isRequired,
	welcome_text_2: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	button_text: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	setIsloaded: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};
