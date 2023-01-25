import { useDeleteListMutation } from '../features/api/listSlice';
import { useToast } from '@chakra-ui/react';
import { useGetTasksQuery } from '../features/api/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';

interface List {
	createdAt: string;
	id: number;
	name: string;
	updatedAt: string;
}

const useDeleteList = () => {
	const [DeleteList] = useDeleteListMutation();
	const toast = useToast();
	const params = useParams();
	const { refetch } = useGetTasksQuery(undefined);
	const navigate = useNavigate();

	const deleteList = (list: List) => {
		const onSelectedList = Object.values(params)[0].includes(list.name);

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
		if (onSelectedList) {
			navigate('/homepage/myday');
		}
	};
	return [deleteList];
};

export default useDeleteList;
