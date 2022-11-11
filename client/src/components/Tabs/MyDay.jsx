import React from 'react';
import { Heading, Text, Center, Spinner } from '@chakra-ui/react';
import { fecha } from './../../utils/date';
import { AddTask } from '../AddTask/AddTask';
import { TasksList } from '../TaskList/TasksList';
import { useGetTasksQuery } from '../../features/api/taskSlice';
import { AddTaskDates } from './../../utils/EnglishTexts';

export const MyDay = ({ text_two }) => {
	const { data = [], isLoading } = useGetTasksQuery();

	return (
		<>
			<Center
				flexDir='column'
				justifyContent='flex-start'
				alignItems='flex-start'
				h='88%'
				w='100%'
				overflow='auto'
			>
				<Center
					textShadow='2px 2px #000000'
					h='20%'
					w='100%'
					alignItems='flex-start'
				>
					<Center justifyContent='space-between' w='96%'>
						<Center flexDir='column' alignItems='flex-start' pt='7px'>
							<Heading as='h2' size='xl'>
								{text_two}
							</Heading>
							<Text as='h4' size='md' textShadow='2px 2px #000000' w='100%'>
								{fecha()}
							</Text>
						</Center>
						{isLoading ? <Spinner size='lg' /> : ''}
					</Center>
				</Center>

				<TasksList data={data} />
			</Center>
			<Center h='10%' alignItems='flex-end'>
				<AddTask {...AddTaskDates} />
			</Center>
		</>
	);
};
