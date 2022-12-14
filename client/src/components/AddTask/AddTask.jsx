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
import PropTypes from 'prop-types';
export const AddTask = ({ buttonText, placeholderText }) => {
	const {
		PostTaskResponse,
		handleSubmit,
		handleOnChange,
		capitalizeFirstLetter,
		data,
		task,
		isLoading,
	} = useAddTask();

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
				<Spinner size='md' ml='15px' mr='15px' aria-label='spinner' />
			) : (
				''
			)}

			<InputGroup>
				{!PostTaskResponse.isLoading ? (
					<InputLeftElement
						aria-label='icontask'
						pointerEvents='none'
						// eslint-disable-next-line react/no-children-prop
						children={<BiTask color='gray.300' />}
					/>
				) : (
					''
				)}

				<Input
					w='70%'
					type='tel'
					variant='unstyled'
					aria-label='taskname'
					placeholder={placeholderText}
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
					mr='1%'
					ml='1%'
					w='12%'
					onClick={handleSubmit}
				>
					{buttonText}
				</Button>
			</InputGroup>
		</Center>
	);
};

AddTask.propTypes = {
	buttonText: PropTypes.string,
	placeholderText: PropTypes.string,
	PostTaskResponse: PropTypes.bool,
	handleSubmit: PropTypes.func,
	handleOnChange: PropTypes.func,
	capitalizeFirstLetter: PropTypes.func,
	data: PropTypes.array,
	task: PropTypes.object,
	isLoading: PropTypes.bool,
};
