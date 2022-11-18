import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	ModalOverlay,
} from '@chakra-ui/react';
import { sessionOut } from '../../features/api/sessionSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ModalLogout = ({
	isOpen,
	onClose,
	onOpen,
	title,
	message,
	button_one,
	button_two,
}) => {
	const initialRef = React.useRef(null);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const logoutConfirm = () => {
		dispatch(sessionOut());
		onClose();
		navigate('/', { replace: true });
	};

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				isCentered
			>
				<ModalOverlay />
				<ModalContent bg='#1A202C'>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>{message}</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							{button_one}
						</Button>
						<Button colorScheme='red' mr={3} onClick={logoutConfirm} ml='4px'>
							{button_two}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

ModalLogout.propTypes = {
	onClose: PropTypes.func.isRequired,
	onOpen: PropTypes.func.isRequired,
	List: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	button_one: PropTypes.string.isRequired,
	button_two: PropTypes.string.isRequired,
};
