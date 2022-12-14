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
	welcomeTextOne,
	welcomeTextTwo,
	name,
	buttonText,
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
						{welcomeTextOne}
						<br />
						{welcomeTextTwo}
						<Image src={me} alt='PabloCarranza' w='30%' />
					</Center>
					<br />
					{name}
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={handleClick}>
						{buttonText}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

ModalWelcome.propTypes = {
	greeting: PropTypes.string.isRequired,
	welcomeTextOne: PropTypes.string.isRequired,
	welcomeTextTwo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	setIsloaded: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};
