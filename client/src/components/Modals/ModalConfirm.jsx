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
	title_partOne,
	title_partTwo,
	message,
	button_one,
	button_two,
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
					<ModalHeader>{title_partOne + List.name + title_partTwo}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>{message}</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							{button_one}
						</Button>
						<Button
							colorScheme='red'
							mr={3}
							onClick={() => deleteList(List)}
							ml='4px'
						>
							{button_two}
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
	title_partOne: PropTypes.string.isRequired,
	title_partTwo: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	button_one: PropTypes.string.isRequired,
	button_two: PropTypes.string.isRequired,
};
