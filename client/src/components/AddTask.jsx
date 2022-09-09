import React from 'react';
import {
	Container,
	Center,
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	Checkbox,
	IconButton,
	Select,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Switch,
	MenuDivider,
	MenuOptionGroup,
	MenuItemOption,
	Stack,
	Text,
	Hide,
} from '@chakra-ui/react';
import {
	ChevronDownIcon,
	AddIcon,
	ArrowForwardIcon,
	ChevronRightIcon,
	SettingsIcon,
} from '@chakra-ui/icons';
import { BiTask } from 'react-icons/bi';
import { useGetListsQuery } from '../features/api/listSlice';
import { useState } from 'react';

export const AddTask = () => {
	const { data = [], error, isLoading, refetch } = useGetListsQuery();

	const [task, setTask] = useState({
		completed: false,
		important: false,
		description: '',
		reminder: 'YYYY-MM-DD',
		expiration_date: '',
		repeat: 'YYYY-MM-DD',
		notes: '',
		listid: null,
	});
	const [expirationDate, setExpirationDate] = useState('');

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

	const onclick = a => {
		console.log(task);
	};

	const handleSubmit = (type, event) => {
		if (type === 'expiration_date') {
			setTask({
				...task,
				expiration_date: event.target.value,
			});
		}
		if (type === 'listid') {
			setTask({
				...task,
				listid: event,
			});
		}

		if (type === 'description') {
			setTask({
				...task,
				description: event.target.value,
			});
		}

		if (type === 'important') {
			setTask({
				...task,
				important: !task.important,
			});
		}
		if (type === 'add') {
			console.log(task);
		}
	};

	return (
		<Center
			w='70%'
			h='50px'
			bg='gray.800'
			color='white'
			borderRadius='10px'
			boxShadow='dark-lg'
		>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<BiTask color='gray.300' />}
				/>

				<Input
					w='70%'
					type='tel'
					variant='unstyled'
					placeholder={
						data.length
							? 'Add new task'
							: 'To enable ADD TASK you must add a task list first'
					}
					value={task.description}
					onChange={e => handleSubmit('description', e)}
					isDisabled={data.length ? false : true}
				/>
				{data.length ? (
					<>
						<Menu computePositionOnMount={true}>
							<MenuButton
								as={Button}
								rightIcon={<ChevronDownIcon />}
								variant='gray'
								borderColor='gray.800'
								bg='gray.800'
								_hover={{ bg: '#44444442', color: '#0084ff' }}
								_expanded={{ bg: '#23486b' }}
								isDisabled={data.length ? false : true}
							>
								Options
							</MenuButton>
							<MenuList variant='gray' borderColor='gray.800' bg='gray.800'>
								<MenuItem
									_hover={{ bg: '#44444442', color: '#0084ff' }}
									closeOnSelect={false}
								>
									<Stack align='center' direction='row'>
										<Text>Important</Text>
										<Switch
											id='important'
											pl='15px'
											colorScheme='teal'
											onChange={e => handleSubmit('important', e)}
										></Switch>
									</Stack>
								</MenuItem>
								<MenuItem
									_hover={{ bg: '#44444442', color: '#0084ff' }}
									closeOnSelect={false}
								>
									<Input
										w='100%'
										placeholder='Select Date and Time'
										size='md'
										variant='gray'
										borderColor='gray.800'
										bg='gray.800'
										type='date'
										value={task.expiration_date}
										onChange={e => handleSubmit('expiration_date', e)}
									/>
								</MenuItem>
								<MenuDivider />
								<MenuOptionGroup title='Task lists' type='radio'>
									{data.map(list => (
										<MenuItemOption
											value={list.name}
											name={list.name}
											key={list.id}
											_hover={{ bg: '#44444442', color: '#0084ff' }}
											closeOnSelect={false}
											onClick={() => handleSubmit('listid', list.id)}
										>
											{capitalizeFirstLetter(list.name)}
										</MenuItemOption>
									))}
								</MenuOptionGroup>
							</MenuList>
						</Menu>

						<Button
							rightIcon={<ChevronRightIcon />}
							variant='white'
							_hover={{ bg: '#44444442', color: '#0084ff' }}
							colorScheme='blue'
							aria-label='Search database'
							mr='1%'
							ml='1%'
							w='12%'
							isDisabled={data.length ? false : true}
							onClick={() => onclick(12)}
						>
							Add
						</Button>
					</>
				) : (
					<>
						<Button
							bg='gray.800'
							_hover={{ bg: '#44444442', color: '#0084ff' }}
						></Button>
					</>
				)}
			</InputGroup>
		</Center>
	);
};
