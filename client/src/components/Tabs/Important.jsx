import React from 'react';
import { Heading, Text, Center } from '@chakra-ui/react';
import { TasksList } from './../TasksList';
import { AddTask } from './../AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';

export const Important = () => {
	const { data = [] } = useGetTasksQuery();

	const onlyImportantTasks = data.filter(task => task.important === true);

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
						Important
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
