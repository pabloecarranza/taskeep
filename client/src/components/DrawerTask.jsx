import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	Button,
	Stack,
	Box,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Select,
	Textarea,
	Checkbox,
	DrawerCloseButton,
} from '@chakra-ui/react';

import { BiTrash } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useGetTaskMutation } from '../features/api/taskSlice';
import { clearCurrentTask } from '../features/api/sessionSlice';

export const DrawerTask = ({ onOpen, onClose, isOpen }) => {
	const firstField = React.useRef();
	const dispatch = useDispatch();
	const getCurrentTask = useSelector(state => state.session.currentTask);
	console.log('get', getCurrentTask);

	function onClosed() {
		dispatch(clearCurrentTask());
		onClose();
	}

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
						Edit task {getCurrentTask.description}
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<FormLabel htmlFor='desc'>Description</FormLabel>
								<Textarea id='desc' />
							</Box>
							<Box>
								<Checkbox pr='25px'>Important</Checkbox>
								<Checkbox>Completed</Checkbox>
							</Box>

							<Box>
								<FormLabel htmlFor='owner'>Change List</FormLabel>
								<Select id='owner' defaultValue='segun'>
									<option value='segun'>Segun Adebayo</option>
									<option value='kola'>Kola Tioluwani</option>
								</Select>
							</Box>
							<Box>
								<label>Expiration Date</label>
								<Input
									w='100%'
									placeholder='Select Date and Time'
									size='md'
									type='date'
									/* 	value={task.expiration_date}
										onChange={e => handleOnChange('expiration_date', e)} */
								/>
							</Box>

							<Box>
								<FormLabel htmlFor='desc'>Notes</FormLabel>
								<Textarea id='desc' />
							</Box>
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth='1px'>
						<Button
							variant='white'
							_hover={{ color: '#ff0000' }}
							colorScheme='red'
							leftIcon={<BiTrash />}
							pr='30%'
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
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};
