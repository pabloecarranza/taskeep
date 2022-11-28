import { Box, Radio, RadioGroup, Stack, Center } from '@chakra-ui/react';
import BG1 from '../../assets/BG1.jpg';
import BG2 from '../../assets/BG2.jpg';
import BG3 from '../../assets/BG3.jpg';
import BG4 from '../../assets/BG4.jpg';
import BG5 from '../../assets/BG5.jpg';
import BG6 from '../../assets/BG6.jpg';
import BG7 from '../../assets/BG7.jpg';
import { Routes, Route } from 'react-router-dom';
import { MyDay } from './../Tabs/MyDay';
import { Important } from './../Tabs/Important';
import { Planing } from './../Tabs/Planing';
import { Completed } from './../Tabs/Completed';
import { CustomList } from './../Tabs/CustomList';
import { useState } from 'react';
import { NotFoundPageDates, TabsDates } from '../../utils/EnglishTexts';
import { NotFoundPage } from './../../Pages/NotFoundPage';

export const MainArea = () => {
	const [value, setValue] = useState('BG1');

	return (
		<Box
			backgroundImage={
				value == 'BG1'
					? BG1
					: value == 'BG2'
					? BG2
					: value == 'BG3'
					? BG3
					: value == 'BG4'
					? BG4
					: value == 'BG5'
					? BG5
					: value == 'BG6'
					? BG6
					: value == 'BG7'
					? BG7
					: BG1
			}
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
			<Center justifyContent='flex-end'>
				<RadioGroup onChange={setValue} value={value}>
					<Stack direction='row'>
						<Radio value='BG1'></Radio>
						<Radio value='BG2'></Radio>
						<Radio value='BG3'></Radio>
						<Radio value='BG4'></Radio>
						<Radio value='BG5'></Radio>
						<Radio value='BG6'></Radio>
						<Radio value='BG7'></Radio>
					</Stack>
				</RadioGroup>
			</Center>
			<Routes>
				<Route path='myday' element={<MyDay {...TabsDates} />}></Route>
				<Route path='important' element={<Important {...TabsDates} />}></Route>
				<Route path='planing' element={<Planing {...TabsDates} />}></Route>
				<Route path='completed' element={<Completed {...TabsDates} />}></Route>
				<Route path='tasklist/:listId' element={<CustomList />}></Route>
				<Route path='*' element={<NotFoundPage {...NotFoundPageDates} />} />
			</Routes>
		</Box>
	);
};
