import React from 'react';
import { Sidebar } from './../components/Sidebar';
import { TaskArea } from './../components/TaskArea';
import { Box, Flex } from '@chakra-ui/react';

export const HomePage = () => {
	return (
		<Flex justifyContent='center' mt='5px'>
			<Sidebar />
			<TaskArea />
		</Flex>
	);
};
