import React, { useRef } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Input,
} from '@chakra-ui/react';

export const AddTaskBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
				New Task
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Add a new Task</DrawerHeader>

					<DrawerBody>
						<Input placeholder='Type here...' />
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};
