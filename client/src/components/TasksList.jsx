import React from 'react';
import { Box, Text, Center, Flex, Heading } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import {
	BiCheckbox,
	BiCheckboxChecked,
	BiCircle,
	BiChevronDownCircle,
} from 'react-icons/bi';
import { useGetTasksQuery } from '../features/api/taskSlice';
export const TasksList = () => {
	const { data = [], error, isLoading, refetch } = useGetTasksQuery();

	console.log('data', data);

	return (
		<>
			{data.map(list => (
				<Flex
					minWidth='max-content'
					alignItems='center'
					gap='2'
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
					w='100%'
					mb='4px'
					key={list.id}
				>
					<Center p='2' pl='20px' w='90%' h='50px' justifyContent='flex-start'>
						<BiCircle size='25px' />
						<BiChevronDownCircle size='25px' />
						<Text pl='20px' size='md'>
							{list.description}
						</Text>
					</Center>

					<Center p='2' w='10%' h='50px'>
						<AiOutlineStar size='25px' />
						<AiTwotoneStar size='25px' />
					</Center>
				</Flex>
			))}
		</>
	);
};
