import { Center, Button } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';
import { DrawerTask } from '../DrawerTask/DrawerTask';
import { useDeleteTask } from '../../Hooks/useDeleteTask';
import { CompletedToggle } from './CompletedToggle';
import { ImportantToggle } from './ImportantToggle';
import PropTypes from 'prop-types';

export const TasksList = ({ data = [] }) => {
	const {
		deleteTaskSubmit,
		setSelectedTask,
		capitalizeFirstLetter,
		listName,
		isOpenDrawerTask,
		onOpenDrawerTask,
		onCloseDrawerTask,
	} = useDeleteTask();

	return (
		<>
			<DrawerTask
				isOpen={isOpenDrawerTask}
				onClose={onCloseDrawerTask}
				onOpen={onOpenDrawerTask}
			/>
			{data.map(list => (
				<>
					<Center
						minWidth='max-content'
						w='100%'
						alignItems='center'
						gap='2'
						bg='gray.700'
						color='white'
						borderRadius='10px'
						boxShadow='lg'
						_hover={{ bg: 'gray.600' }}
						_active={{
							bg: 'gray.600',
						}}
						mb='7px'
						h='55px'
					>
						<CompletedToggle
							list={list}
							setSelectedTask={setSelectedTask}
							capitalizeFirstLetter={capitalizeFirstLetter}
							listName={listName}
						/>
						<ImportantToggle list={list} setSelectedTask={setSelectedTask} />

						<Button
							_hover={{ bg: 'gray.600', color: 'red' }}
							bg='#f5f5f50'
							color='gray.500'
							key={list.id}
							_active={{
								bg: 'gray.600',
							}}
							onClick={() => deleteTaskSubmit(list.id)}
						>
							<AiOutlineDelete size='25px' />
						</Button>
					</Center>
				</>
			))}
		</>
	);
};

TasksList.propTypes = {
	data: PropTypes.array.isRequired,
};
