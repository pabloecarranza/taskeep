import React from 'react';
import { Heading, Text, Center } from '@chakra-ui/react';
import { fecha } from './../../utils/date';
import { AddTask } from './../AddTask';
import { TasksList } from './../TasksList';

export const MyDay = () => {
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
						My day
					</Heading>
					<Text as='h4' size='md' pt='10px'>
						{fecha()}
					</Text>
				</Text>
				<TasksList />
			</Center>
			<Center h='90%' alignItems='flex-end'>
				<AddTask />
			</Center>
		</>
	);
};
