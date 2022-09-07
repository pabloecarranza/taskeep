import { Box, Heading, Text } from '@chakra-ui/react';
import bg from '../assets/beach.jpg';

import { Routes, Route } from 'react-router-dom';
import { MyDay } from './Tabs/MyDay';
import { Important } from './Tabs/Important';
import { Planing } from './Tabs/Planing';
import { Completed } from './Tabs/Completed';
import { AssignedToMe } from './Tabs/AssignedToMe';
import { Tasks } from './Tabs/Tasks';

export const TaskArea = () => {
	return (
		<Box
			backgroundImage={bg}
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			w='79%'
			h='94vh'
			p={4}
			color='white'
			borderRadius='20px'
			mt='10px'
			boxShadow='md'
		>
			<Routes>
				<Route path='myday' element={<MyDay />}></Route>
				<Route path='important' element={<Important />}></Route>
				<Route path='planing' element={<Planing />}></Route>
				<Route path='completed' element={<Completed />}></Route>
				<Route path='assignedtome' element={<AssignedToMe />}></Route>
				<Route path='tasks' element={<Tasks />}></Route>
			</Routes>
		</Box>
	);
};
