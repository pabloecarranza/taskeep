import { useDeleteListMutation } from '../features/api/listSlice';
import { useToast } from '@chakra-ui/react';
import { useGetTasksQuery } from '../features/api/taskSlice';
import { useNavigate } from 'react-router-dom';
import { useCustomSelector } from './reduxHooks';

interface List {
	createdAt: string;
	id: number;
	name: string;
	updatedAt: string;
}

const useDeleteList = () => {
	const [DeleteList] = useDeleteListMutation();
	const toast = useToast();
	const { refetch } = useGetTasksQuery(undefined);
	const navigate = useNavigate();
	const { currentTab } = useCustomSelector(state => state.session);

	const deleteList = (list: List) => {
		DeleteList(list.id)
			.unwrap()
			.then(respon => {
				toast({
					title: 'Success.',
					description: `${respon.message}`,
					status: 'success',
					duration: 1500,
					isClosable: true,
				});
			})
			.catch(error => {
				toast({
					title: 'Error',
					description: `${error.data.message}`,
					status: 'error',
					duration: 1500,
					isClosable: true,
				});
			});
		refetch();
		if (list.name === currentTab) {
			navigate('/homepage/myday');
		}
	};
	return [deleteList];
};

export default useDeleteList;
