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

export const AddTask = () => {
	const { data = [], error, isLoading, refetch } = useGetListsQuery();

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

	console.log('datac', data);
	const onclick = a => {
		console.log('a', a.target.outerText);
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
					placeholder='Add new task'
				/>

				<Menu>
					<MenuButton
						as={Button}
						rightIcon={<ChevronDownIcon />}
						variant='gray'
						borderColor='gray.800'
						bg='gray.800'
						_hover={{ bg: '#44444442', color: '#0084ff' }}
						_expanded={{ bg: '#23486b' }}
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
								<Switch id='email-alerts' pl='15px'></Switch>
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
							/>
						</MenuItem>
						<MenuDivider />
						<MenuOptionGroup title='Task lists' type='radio'>
							{data.length ? (
								data.map(list => (
									<MenuItemOption
										value={list.name}
										name={list.name}
										key={list.id}
										_hover={{ bg: '#44444442', color: '#0084ff' }}
										closeOnSelect={false}
										onClick={onclick}
									>
										{capitalizeFirstLetter(list.name)}
									</MenuItemOption>
								))
							) : (
								<>
									<MenuItemOption
										value='add a new task list'
										key='no date'
										_hover={{ bg: '#44444442', color: '#0084ff' }}
										closeOnSelect={false}
										onClick={onclick}
										isDisabled={true}
									>
										add a new task list
									</MenuItemOption>
								</>
							)}
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
				>
					Add
				</Button>
			</InputGroup>
		</Center>
	);
};
