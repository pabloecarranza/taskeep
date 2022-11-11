import { useDispatch } from 'react-redux';
import { useGetListsQuery } from '../features/api/listSlice';
import { currentTask } from '../features/api/sessionSlice';
import {
	useDeleteTaskMutation,
	useHotPutTaskMutation,
} from '../features/api/taskSlice';
import { useToast, useDisclosure } from '@chakra-ui/react';

export const useDeleteTask = () => {
	const dispatch = useDispatch();
	const toast = useToast();
	const [HotPutTask] = useHotPutTaskMutation();
	const [DeleteTask] = useDeleteTaskMutation();

	const {
		isOpen: isOpenDrawerTask,
		onOpen: onOpenDrawerTask,
		onClose: onCloseDrawerTask,
	} = useDisclosure();
	const { data: lists = [] } = useGetListsQuery();

	const listName = e => {
		const found = lists.find(list => list.id === e);

		return found?.name;
	};

	function capitalizeFirstLetter(str) {
		if (!str) {
			return '';
		} else {
			const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

			return capitalized;
		}
	}

	function setSelectedTask(task, e) {
		if (e === 'openTask') {
			dispatch(currentTask(task));
			onOpenDrawerTask();
			return;
		}

		if (e === 'setFalseCompleted') {
			HotPutTask(task);
			return;
		}
		if (e === 'setTrueCompleted') {
			HotPutTask(task);
			return;
		}
		if (e === 'setFalseImportant') {
			HotPutTask(task);
			return;
		}
		if (e === 'setTrueImportant') {
			HotPutTask(task);
			return;
		}
	}

	function deleteTaskSubmit(taskid) {
		DeleteTask(taskid)
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
	}

	return {
		deleteTaskSubmit,
		setSelectedTask,
		capitalizeFirstLetter,
		listName,
		isOpenDrawerTask,
		onOpenDrawerTask,
		onCloseDrawerTask,
	};
};
