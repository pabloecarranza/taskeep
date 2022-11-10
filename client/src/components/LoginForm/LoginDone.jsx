import React from 'react';
import {
	Button,
	Center,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	SlideFade,
} from '@chakra-ui/react';

export const LoginDone = ({ navigate, title, description, button }) => {
	return (
		<SlideFade offsetY='20px' in='true'>
			<Alert
				pt='40%'
				status='success'
				variant='blackAlpha'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				textAlign='center'
				height='100%'
			>
				<Center flexDir='column'>
					<AlertIcon boxSize='40px' mr={0} />
					<AlertTitle mt={4} mb={1} fontSize='lg'>
						{title}
					</AlertTitle>
					<AlertDescription maxWidth='sm'>{description}</AlertDescription>
				</Center>
				<Button
					size='lg'
					colorScheme='blue'
					onClick={() => navigate('/homepage', { replace: true })}
					w='60%'
					mt='30px'
				>
					{button}
				</Button>
			</Alert>
		</SlideFade>
	);
};
