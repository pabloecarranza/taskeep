import React from 'react';
import { useDeleteListMutation } from '../features/api/listSlice';
import { useToast } from '@chakra-ui/react';
import { useGetTasksQuery } from '../features/api/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';

const useDeleteList = (onClose, setSeleted) => {
	const [DeleteList] = useDeleteListMutation();
	const toast = useToast();
	const params = useParams();
	const { refetch } = useGetTasksQuery();
	const navigate = useNavigate();

	const deleteList = list => {
		DeleteList(list.id)
			.unwrap()
			.then(respon => {
				toast({
					title: 'Success.',
					description: `${respon.message}`,
					status: 'success',
					duration: 3000,
					isClosable: true,
				});
				console.log('good', respon);
				onClose();
			})
			.catch(error => {
				toast({
					title: 'Error',
					description: `${error.data.message}`,
					status: 'error',
					duration: 2000,
					isClosable: true,
				});
				console.log('error', error);
			});
		setSeleted({});
		onClose();
		refetch();
		if (Object.values(params)[0].includes(list.name)) {
			navigate('/homepage/myday');
		}
	};
	return [deleteList];
};

export default useDeleteList;
