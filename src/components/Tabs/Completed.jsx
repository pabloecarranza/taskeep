import { Heading, Text, Center } from '@chakra-ui/react';
import { TasksList } from '../TaskList/TasksList';
import { AddTask } from '../AddTask/AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentTab } from '../../features/api/sessionSlice';
import { AddTaskDates } from '../../utils/EnglishTexts';

export const Completed = ({ textOne }) => {
	const { data = [] } = useGetTasksQuery();

	const onlyCompletedTasks = data.filter(task => task.completed === true);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentTab('Completed'));
	}, []);

	return (
		<>
			<Center
				flexDir='column'
				justifyContent='space-between'
				alignItems='flex-start'
				h='10%'
			>
				<Text textShadow='2px 2px #000000' m='6'>
					<Heading as='h2' size='xl'>
						{textOne}
					</Heading>
				</Text>
				<TasksList data={onlyCompletedTasks} />
			</Center>
			<Center h='88%' alignItems='flex-end'>
				<AddTask {...AddTaskDates} />
			</Center>
		</>
	);
};

Completed.propTypes = {
	textOne: PropTypes.string.isRequired,
};
