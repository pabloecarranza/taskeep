import { Heading, Text, Center } from '@chakra-ui/react';
import { TasksList } from '../TaskList/TasksList';
import { AddTask } from '../AddTask/AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';
import PropTypes from 'prop-types';

export const Planing = ({ textThree }) => {
	const { data = [] } = useGetTasksQuery();
	const onlyPlaningTasks = data.filter(task => task.expiration_date);

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
						{textThree}
					</Heading>
				</Text>
				<TasksList data={onlyPlaningTasks} />
			</Center>
			<Center h='88%' alignItems='flex-end'>
				<AddTask />
			</Center>
		</>
	);
};

Planing.propTypes = {
	textThree: PropTypes.string.isRequired,
};
