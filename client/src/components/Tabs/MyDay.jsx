import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { fecha } from './../../utils/date';

export const MyDay = () => {
	return (
		<Text textShadow='2px 2px #000000' m='6'>
			<Heading as='h2' size='xl'>
				My day
			</Heading>
			<Text as='h4' size='md' pt='10px'>
				{fecha()}
			</Text>
		</Text>
	);
};
