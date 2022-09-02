import { Box, Heading, Text } from '@chakra-ui/react';
import bg from '../assets/beach.jpg';
import { fecha } from './../utils/date';

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
			<Text textShadow='2px 2px #000000' m='6'>
				<Heading as='h4' size='md'>
					{fecha()}
				</Heading>
			</Text>
		</Box>
	);
};
