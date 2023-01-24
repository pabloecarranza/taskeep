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
import { useCustomSelector } from '../../Hooks/reduxHooks';

interface Props {
	greeting: string,
	welcomeTextOne: string,
	welcomeTextTwo:string,
	name: string,
	buttonText: string,
	onClose: () => void,
	setIsloaded: (cb: (value: boolean) => boolean ) => void,
	isOpen: boolean,
}


export const ModalWelcome = ({
	isOpen,
	onClose,
	setIsloaded,
	greeting,
	welcomeTextOne,
	welcomeTextTwo,
	name,
	buttonText,
}: Props) => {
	
	const handleClick = () :void  => {
		onClose();
		setIsloaded(value => !value);
	};

	const { username } = useCustomSelector((state) => state.session);

	return (
		<Modal isOpen={isOpen} onClose={handleClick} isCentered size='lg'>
			<ModalOverlay />
			<ModalContent bg='#1A202C'>
				<ModalHeader>
					{greeting} {username || ''}!
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
