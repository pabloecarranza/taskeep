import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';
import useDeleteList from './../../Hooks/useDeleteList';
import PropTypes from 'prop-types';

export const ModalConfirm = ({
	isOpen,
	onClose,
	onOpen,
	List,
	setSeleted,
	titlePartOne,
	titlePartTwo,
	message,
	buttonOne,
	buttonTwo,
}) => {
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
					<ModalHeader>{titlePartOne + List.name + titlePartTwo}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>{message}</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							{buttonOne}
						</Button>
						<Button
							colorScheme='red'
							mr={3}
							onClick={() => deleteList(List)}
							ml='4px'
						>
							{buttonTwo}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

ModalConfirm.propTypes = {
	onClose: PropTypes.func.isRequired,
	onOpen: PropTypes.func.isRequired,
	List: PropTypes.object.isRequired,
	setSeleted: PropTypes.func.isRequired,
	titlePartOne: PropTypes.string.isRequired,
	titlePartTwo: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	buttonOne: PropTypes.string.isRequired,
	buttonTwo: PropTypes.string.isRequired,
	isOpen: PropTypes.bool,
};
