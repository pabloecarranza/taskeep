import React from 'react';
import { Heading, Text, Center } from '@chakra-ui/react';
import { TasksList } from './../TasksList';
import { AddTask } from '../AddTask/AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';

export const Completed = () => {
	const { data = [] } = useGetTasksQuery();

	const onlyCompletedTasks = data.filter(task => task.completed === true);

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
						Completed
					</Heading>
				</Text>
				<TasksList data={onlyCompletedTasks} />
			</Center>
			<Center h='88%' alignItems='flex-end'>
				<AddTask />
			</Center>
		</>
	);
};
