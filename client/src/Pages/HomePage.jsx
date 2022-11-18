import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { MainArea } from './../components/Routes/MainArea';

export const HomePage = () => {
	return (
		<Flex justifyContent='center' mt='5px'>
			<Sidebar />
			<MainArea />
		</Flex>
	);
};
