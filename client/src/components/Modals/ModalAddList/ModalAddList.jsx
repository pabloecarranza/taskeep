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
	useToast,
} from '@chakra-ui/react';
import { usePostListMutation } from '../../../features/api/listSlice';
import usehandleAdd from './useHandleAdd';

export const ModalAddList = ({ isOpen, onClose }) => {
	const handleClick = () => {
		onClose();
	};

	const [input, handleChange, handleSubmit] = usehandleAdd(onClose);

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
					<ModalHeader>Create a new task list</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>List name</FormLabel>
							<Input
								ref={initialRef}
								placeholder='Write here...'
								value={input.name}
								onChange={e => handleChange(e.target.value)}
								onKeyDown={e => handleSubmit(e)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
						<Button
							colorScheme='blue'
							mr={3}
							ml='4px'
							onClick={e => handleSubmit(e)}
							onKeyDown={e => handleSubmit(e)}
						>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
