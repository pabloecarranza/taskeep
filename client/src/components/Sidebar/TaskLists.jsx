import React from 'react';
import { CgList, CgClose } from 'react-icons/cg';
import {
	Button,
	SkeletonText,
	Center,
	ButtonGroup,
	IconButton,
} from '@chakra-ui/react';
import {
	useDeleteListMutation,
	useGetListsQuery,
} from '../../features/api/listSlice';

export const TaskLists = ({ data, isloaded }) => {
	const [DeleteList] = useDeleteListMutation();
	const { refetch } = useGetListsQuery();

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

	function handleSelect(e) {
		console.log('probando', e);
	}
	function handleDeleted(e) {
		DeleteList(e);
		refetch();
	}

	return data.map(list => (
		<Center>
			{/* <CgList /> */}
			<Button
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				justifyContent='space-between'
				key={list.id}
				w='100%'
				name={list.name}
				onClick={e => handleSelect(list.name)}
			>
				{capitalizeFirstLetter(list.name)}
			</Button>
			<Button
				justifyContent='center'
				rightIcon={<CgClose />}
				variant='gray'
				key={list.name}
				colorScheme='whiteAlpha'
				_hover={{ color: '#ff4000' }}
				onClick={e => handleDeleted(list.id)}
			/>
		</Center>
	));
};
