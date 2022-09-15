import React from 'react';
import { Heading, Text, Center } from '@chakra-ui/react';
import { TasksList } from './../TasksList';
import { AddTask } from './../AddTask';
import { useGetTasksQuery } from '../../features/api/taskSlice';
import { useParams } from 'react-router-dom';
import { useGetListsQuery } from '../../features/api/listSlice';

export const CustomList = () => {
	const params = useParams();

	const { data = [] } = useGetTasksQuery();
	const { data: lists = [] } = useGetListsQuery();

	const listSelect = lists.find(list => list.name === params.listId);
	const onlySelectListTasks = data.filter(
		task => task.listid === listSelect.id
	);

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

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
						{capitalizeFirstLetter(params.listId)}
					</Heading>
				</Text>
				<TasksList data={onlySelectListTasks} />
			</Center>
			<Center h='88%' alignItems='flex-end'>
				<AddTask />
			</Center>
		</>
	);
};
