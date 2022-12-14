import {
	Drawer,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	DrawerCloseButton,
} from '@chakra-ui/react';

import { BiTrash } from 'react-icons/bi';
import { useEffect, useRef } from 'react';
import { useDrawerTask } from '../../Hooks/useDrawerTask';
import { DrawerBodyTask } from './DrawerBodyTask';
import { DrawerBodyTaskDates } from '../../utils/EnglishTexts';
import PropTypes from 'prop-types';

export const DrawerTask = ({ onOpen, onClose, isOpen }) => {
	const firstField = useRef();

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
						Edit task number {task ? task.id : 0}
					</DrawerHeader>

					<DrawerBodyTask
						handleOnChange={handleOnChange}
						capitalizeFirstLetter={capitalizeFirstLetter}
						task={task}
						data={data}
						{...DrawerBodyTaskDates}
					/>

					<DrawerFooter borderTopWidth='1px'>
						<Button
							data-testid='trash'
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
							onClick={onClosed}
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

DrawerTask.propTypes = {
	onOpen: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};
