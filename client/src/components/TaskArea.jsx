import { Box } from '@chakra-ui/react';
import bg from '../assets/fields.png';

export const TaskArea = () => {
	return (
		<Box
			backgroundImage={bg}
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			w='76%'
			h='95vh'
			p={4}
			color='white'
			borderRadius='20px'
			mt='10px'
			boxShadow='md'
		>
			This is the Box
		</Box>
	);
};
