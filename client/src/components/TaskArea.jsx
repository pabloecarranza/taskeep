import { Box, Heading, Text } from '@chakra-ui/react';
import bg from '../assets/beach.jpg';

import { Routes, Route } from 'react-router-dom';
import { MyDay } from './Tabs/MyDay';
import { Important } from './Tabs/Important';

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
			</Routes>
		</Box>
	);
};
