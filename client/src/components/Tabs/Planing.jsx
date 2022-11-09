import React from 'react';
import { Heading, Text, Center } from '@chakra-ui/react';
import { TasksList } from './../TasksList';
import { AddTask } from '../AddTask/AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';

export const Planing = () => {
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
						Planing
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
