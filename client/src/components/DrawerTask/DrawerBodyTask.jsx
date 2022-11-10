import React from 'react';
import {
	DrawerBody,
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
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
export const DrawerBodyTask = ({
	handleOnChange,
	capitalizeFirstLetter,
	task,
	data,
}) => {
	return (
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
	);
};
