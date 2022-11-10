import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	Stack,
	Box,
	FormLabel,
	Input,
	MenuButton,
	Textarea,
	Checkbox,
	Menu,
	MenuList,
	MenuOptionGroup,
	MenuItemOption,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BiTrash } from 'react-icons/bi';
import { useEffect } from 'react';
import { useDrawerTask } from './../../Hooks/useDrawerTask';
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

					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<FormLabel htmlFor='desc'>Description</FormLabel>
								<Textarea
									id='desc'
									value={task.description}
									key={task.id}
									onChange={e => handleOnChange('description', e)}
								/>
							</Box>
							<Box>
								<Checkbox
									pr='25px'
									isChecked={task.important}
									key={task.id}
									onChange={e => handleOnChange('important', e)}
								>
									Important
								</Checkbox>
								<Checkbox
									isChecked={task.completed}
									key={task.id + 'a'}
									onChange={e => handleOnChange('completed', e)}
								>
									Completed
								</Checkbox>
							</Box>

							<Box>
								<Menu>
									<MenuButton
										as={Button}
										rightIcon={<ChevronDownIcon />}
										variant='gray'
										borderColor='gray.800'
										bg='gray.800'
										w='100%'
										_hover={{ bg: '#44444442', color: '#0084ff' }}
										_expanded={{ bg: '#23486b' }}
									>
										Change List
									</MenuButton>
									<MenuList variant='gray' borderColor='gray.800' bg='gray.800'>
										<MenuOptionGroup title='Task lists' type='radio'>
											{data.map(list => (
												<MenuItemOption
													value={list.name}
													name={list.name}
													key={list.id}
													_hover={{ bg: '#44444442', color: '#0084ff' }}
													closeOnSelect={true}
													onClick={() => handleOnChange('listid', list.id)}
												>
													{capitalizeFirstLetter(list.name)}
												</MenuItemOption>
											))}
										</MenuOptionGroup>
									</MenuList>
								</Menu>
							</Box>
							<Box>
								<label>Expiration Date</label>
								<Input
									w='100%'
									placeholder='Select Date and Time'
									size='md'
									type='date'
									value={task.expiration_date}
									onChange={e => handleOnChange('expiration_date', e)}
								/>
							</Box>

							<Box>
								<FormLabel htmlFor='desc'>Notes</FormLabel>
								<Textarea
									id='notes'
									value={task.notes}
									key={task.id}
									onChange={e => handleOnChange('notes', e)}
								/>
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
