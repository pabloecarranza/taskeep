import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
export const Important = () => {
	return (
		<Text textShadow='2px 2px #000000' m='6'>
			<Heading as='h2' size='xl'>
				Important
			</Heading>
		</Text>
	);
};