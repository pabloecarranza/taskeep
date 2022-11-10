import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	DrawerCloseButton,
} from '@chakra-ui/react';

import { BiTrash } from 'react-icons/bi';
import { useEffect } from 'react';
import { useDrawerTask } from '../../Hooks/useDrawerTask';
import { DrawerBodyTask } from './DrawerBodyTask';

export const DrawerTask = ({ onOpen, onClose, isOpen }) => {
	const firstField = React.useRef();

	const {
		data,
		onClosed,
		task,
		setTask,
		handleOnChange,
		deleteTaskSubmit,
		PutTaskSubmit,
		capitalizeFirstLetter,
		getCurrentTask,
	} = useDrawerTask(onClose);

	useEffect(() => {
		setTask(getCurrentTask);
	}, [isOpen]);

	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClosed}
			>
				<DrawerOverlay />
				<DrawerContent
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
				>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						Edit task number {task.id}
					</DrawerHeader>

					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
					/>

					<DrawerFooter borderTopWidth='1px'>
						<Button
							variant='white'
							_hover={{ color: '#ff0000' }}
							colorScheme='red'
							leftIcon={<BiTrash />}
							pr='30%'
							onClick={deleteTaskSubmit}
						/>
						<Button
							variant='gray'
							_hover={{ bg: '#44444442', color: '#0084ff' }}
							colorScheme='blue'
							mr={3}
							onClick={onClose}
						>
							Cancel
						</Button>
						<Button colorScheme='blue' onClick={PutTaskSubmit}>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};