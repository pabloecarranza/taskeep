import React from 'react';
import {
	Input,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Spinner,
	Button,
	Switch,
	MenuDivider,
	MenuOptionGroup,
	MenuItemOption,
	Stack,
	Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export const OptionsMenu = ({
	task,
	data,
	isLoading,
	capitalizeFirstLetter,
	handleOnChange,
}) => {
	return (
		<Menu computePositionOnMount={true}>
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
						<Switch
							id='important'
							pl='15px'
							colorScheme='teal'
							onChange={e => handleOnChange('important', e)}
						/>
					</Stack>
				</MenuItem>
				<MenuItem
					_hover={{ bg: '#44444442', color: '#0084ff' }}
					closeOnSelect={false}
				>
					<Input
						w='100%'
						size='md'
						variant='gray'
						borderColor='gray.800'
						bg='gray.800'
						type='date'
						value={task.expiration_date}
						onChange={e => handleOnChange('expiration_date', e)}
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
							onClick={() => handleOnChange('listid', list.id)}
						>
							{capitalizeFirstLetter(list.name)}
						</MenuItemOption>
					))}
					{isLoading ? <Spinner size='md' ml='10%' /> : ''}
				</MenuOptionGroup>
			</MenuList>
		</Menu>
	);
};

OptionsMenu.propTypes = {
	task: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	capitalizeFirstLetter: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
};
