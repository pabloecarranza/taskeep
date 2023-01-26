import { Heading, Text, Center } from '@chakra-ui/react';
import { AddTask } from '../AddTask/AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';
import { TasksList } from '../TaskList/TasksList';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { currentTab } from '../../features/api/sessionSlice';
import { useDispatch } from 'react-redux';

export const Important = ({ textFour }) => {
	const { data = [] } = useGetTasksQuery();

	const onlyImportantTasks = data.filter(task => task.important === true);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentTab('Important'));
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
						{textFour}
					</Heading>
				</Text>
				<TasksList data={onlyImportantTasks} />
			</Center>
			<Center h='88%' alignItems='flex-end'>
				<AddTask />
			</Center>
		</>
	);
};

Important.propTypes = {
	textFour: PropTypes.string.isRequired,
};
