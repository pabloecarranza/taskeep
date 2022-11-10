import React from 'react';
import {
	Center,
	Input,
	InputGroup,
	InputLeftElement,
	Spinner,
	Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BiTask } from 'react-icons/bi';
import { useAddTask } from '../../Hooks/useAddTask';
import { OptionsMenu } from './OptionsMenu';

export const AddTask = () => {
	const userData = JSON.parse(localStorage.getItem('identified-user'));

	const {
		PostTaskResponse,
		handleSubmit,
		handleOnChange,
		capitalizeFirstLetter,
		data,
		task,
		isLoading,
	} = useAddTask(userData);

	return (
		<Center
			w='70%'
			h='50px'
			bg='gray.800'
			color='white'
			borderRadius='10px'
			boxShadow='dark-lg'
		>
			{PostTaskResponse.isLoading ? (
				<Spinner size='md' ml='15px' mr='15px' />
			) : (
				''
			)}

			<InputGroup>
				{!PostTaskResponse.isLoading ? (
					<InputLeftElement
						pointerEvents='none'
						children={<BiTask color='gray.300' />}
					/>
				) : (
					''
				)}

				<Input
					w='70%'
					type='tel'
					variant='unstyled'
					placeholder='Add new task'
					value={task.description}
					onChange={e => handleOnChange('description', e)}
				/>

				<OptionsMenu
					capitalizeFirstLetter={capitalizeFirstLetter}
					data={data}
					task={task}
					isLoading={isLoading}
					handleOnChange={handleOnChange}
				/>

				<Button
					rightIcon={<ChevronRightIcon />}
					variant='white'
					_hover={{ bg: '#44444442', color: '#0084ff' }}
					colorScheme='blue'
					aria-label='Search database'
					mr='1%'
					ml='1%'
					w='12%'
					onClick={handleSubmit}
				>
					Add
				</Button>
			</InputGroup>
		</Center>
	);
};
