import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { fecha } from './../../utils/date';

export const MyDay = () => {
	return (
		<Text textShadow='2px 2px #000000' m='6'>
			<Heading as='h4' size='md'>
				{fecha()}
			</Heading>
		</Text>
	);
};
