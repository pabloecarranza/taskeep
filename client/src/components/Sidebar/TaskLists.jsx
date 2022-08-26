import React from 'react';
import { CgList } from 'react-icons/cg';
import { Button, SkeletonText } from '@chakra-ui/react';

export const TaskLists = ({ data, isloaded }) => {
	return data.map(list => (
		<Button
			leftIcon={<CgList />}
			variant='white'
			_hover={{ bg: '#44444442', color: '#0084ff' }}
			justifyContent='flex-start'
			key={list.id}
			w='100%'
		>
			{list.name}
		</Button>
	));
};
