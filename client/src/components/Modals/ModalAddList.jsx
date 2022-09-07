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
import { usePostListMutation } from '../../features/api/listSlice';

export const ModalAddList = ({ isOpen, onClose }) => {
	const toast = useToast();
	const handleClick = () => {
		onClose();
	};

	const initialRef = React.useRef(null);
	const [input, setInput] = React.useState({
		name: '',
	});

	const handleChange = e => {
		setInput({ name: e.target.value });
	};

	const [PostList, PostListResponse] = usePostListMutation();

	const handleSubmit = async () => {
		console.log(input.name);
		if (input.name.length === 0) {
			toast({
				title: 'Error.',
				description: 'The field list name cant by empty.',
				status: 'error',
				duration: 2000,
				isClosable: true,
			});

			return;
		} else {
			PostList(input)
				.unwrap()
				.then(respon => {
					toast({
						title: 'Success.',
						description: `${respon.message}`,
						status: 'success',
						duration: 3000,
						isClosable: true,
					});
					onClose();
				})
				.catch(error => {
					toast({
						title: 'Error',
						description: `${error.data.message}`,
						status: 'error',
						duration: 2000,
						isClosable: true,
					});
				});

			/* 			
			SignIn(credentials)
				.unwrap()
				.then(respon => {
					toast({
						title: 'Success.',
						description: `${respon.message}`,
						status: 'success',
						duration: 2000,
						isClosable: true,
					});
				})
				.catch(error => {
					toast({
						title: 'Error',
						description: `${error.data.message}`,
						status: 'error',
						duration: 2000,
						isClosable: true,
					});
				});
			setCredentials({
				username: '',
				password: '',
				email: '',
			});
			*/
			setInput({ name: '' });
		}
	};

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
								onChange={handleChange}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue' mr={3} onClick={handleSubmit} ml='4px'>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
