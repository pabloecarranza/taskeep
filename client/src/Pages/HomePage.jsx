import React from 'react';
import { TaskArea } from './../components/TaskArea';
import { Flex } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const HomePage = () => {
	return (
		<Flex justifyContent='center' mt='5px'>
			<Sidebar />
			<TaskArea />
		</Flex>
	);
};
