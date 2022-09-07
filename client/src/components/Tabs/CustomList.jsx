import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';
export const CustomList = () => {
	const params = useParams();
	return (
		<Text textShadow='2px 2px #000000' m='6'>
			<Heading as='h2' size='xl'>
				{params.listId}
			</Heading>
		</Text>
	);
};
