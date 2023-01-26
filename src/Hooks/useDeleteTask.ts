import { useGetListsQuery } from '../features/api/listSlice';
import { currentTask } from '../features/api/sessionSlice';
import { useCustomDispatch } from './reduxHooks';
import {
	useDeleteTaskMutation,
	useHotPutTaskMutation,
} from '../features/api/taskSlice';
import { useToast, useDisclosure } from '@chakra-ui/react';

interface List {
	completed: boolean;
	createdAt: string;
	description: string;
	expiration_date: string;
	id: string;
	important: boolean;
	listid: null;
	notes: string;
	reminder: string;
	repeat: string;
	updatedAt: string;
	userid: string;
}

export const useDeleteTask = () => {
	const dispatch = useCustomDispatch();
	const toast = useToast();
	const [HotPutTask] = useHotPutTaskMutation();
	const [DeleteTask] = useDeleteTaskMutation();

	const {
		isOpen: isOpenDrawerTask,
		onOpen: onOpenDrawerTask,
		onClose: onCloseDrawerTask,
	} = useDisclosure();
	const { data: lists = [] } = useGetListsQuery(undefined);

	const listName = (event: string) => {
		const found = lists.find((list: List) => list.id === event);

		return found?.name;
	};

	function capitalizeFirstLetter(str: string) {
		if (!str) {
			return '';
		} else {
			const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

			return capitalized;
		}
	}

	function setSelectedTask(task: string, e: string) {
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
		}
	}

	function deleteTaskSubmit(taskid: string) {
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
