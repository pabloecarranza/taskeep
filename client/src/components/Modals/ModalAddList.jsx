import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import usehandleAdd from '../../Hooks/useHandleAdd';

export const ModalAddList = ({
	isOpen,
	onClose,
	title,
	name,
	buttonOne,
	buttonTwo,
	placeHolder,
}) => {
	const [input, handleChange, handleSubmit, handleClick] =
		usehandleAdd(onClose);

	const initialRef = React.useRef(null);

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={handleClick}
				isCentered
			>
				<ModalContent bg='#1A202C'>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel> {name} </FormLabel>
							<Input
								ref={initialRef}
								placeholder={placeHolder}
								value={input.name}
								onChange={e => handleChange(e.target.value)}
								onKeyDown={e => handleSubmit(e)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							{buttonOne}
						</Button>
						<Button
							colorScheme='blue'
							mr={3}
							ml='4px'
							onClick={e => handleSubmit(e)}
							onKeyDown={e => handleSubmit(e)}
						>
							{buttonTwo}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

ModalAddList.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	buttonOne: PropTypes.string.isRequired,
	buttonTwo: PropTypes.string.isRequired,
	placeHolder: PropTypes.string.isRequired,
};
