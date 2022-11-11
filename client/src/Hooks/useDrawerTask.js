import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetListsQuery } from '../features/api/listSlice';
import { clearCurrentTask } from '../features/api/sessionSlice';
import {
	useDeleteTaskMutation,
	usePutTaskMutation,
} from '../features/api/taskSlice';
import { useToast } from '@chakra-ui/react';

export const useDrawerTask = onClose => {
	const toast = useToast();
	const dispatch = useDispatch();
	const getCurrentTask = useSelector(state => state.session.currentTask);
	const [task, setTask] = useState({
		completed: false,
		important: false,
		description: '',
		reminder: 'YYYY-MM-DD',
		expiration_date: '',
		repeat: 'YYYY-MM-DD',
		notes: '',
		listid: getCurrentTask.listid,
		userid: null,
	});

	const [DeleteTask] = useDeleteTaskMutation();
	const [PutTask] = usePutTaskMutation();
	const { data = [], error, isLoading, refetch } = useGetListsQuery();

	function onClosed() {
		dispatch(clearCurrentTask());
		onClose();
		setTask({
			completed: false,
			important: null,
			description: '',
			reminder: 'YYYY-MM-DD',
			expiration_date: '',
			repeat: 'YYYY-MM-DD',
			notes: '',
			listid: null,
			userid: null,
		});
	}

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

	const handleOnChange = (type, event) => {
		if (type === 'expiration_date') {
			setTask({
				...task,
				expiration_date: event.target.value,
			});
		}
		if (type === 'listid') {
			setTask({
				...task,
				listid: event,
			});
		}

		if (type === 'description') {
			setTask({
				...task,
				description: event.target.value,
			});
		}
		if (type === 'notes') {
			setTask({
				...task,
				notes: event.target.value,
			});
		}

		if (type === 'important') {
			setTask({
				...task,
				important: !task.important,
			});
		}
		if (type === 'completed') {
			setTask({
				...task,
				completed: !task.completed,
			});
		}
	};

	function deleteTaskSubmit() {
		DeleteTask(getCurrentTask.id)
			.unwrap()
			.then(respon => {
				toast({
					title: 'Success.',
					description: `${respon.message}`,
					status: 'success',
					duration: 1500,
					isClosable: true,
				});
				onClose();
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
		dispatch(clearCurrentTask());
		onClose();
	}

	function PutTaskSubmit() {
		PutTask(task)
			.unwrap()
			.then(respon => {
				toast({
					title: 'Success.',
					description: `${respon.message}`,
					status: 'success',
					duration: 1500,
					isClosable: true,
				});
				onClose();
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
		dispatch(clearCurrentTask());
		onClose();
		setTask({
			completed: false,
			important: null,
			description: '',
			reminder: 'YYYY-MM-DD',
			expiration_date: '',
			repeat: 'YYYY-MM-DD',
			notes: '',
			listid: null,
			userid: null,
		});
	}

	return {
		data,
		onClosed,
		task,
		setTask,
		handleOnChange,
		deleteTaskSubmit,
		PutTaskSubmit,
		capitalizeFirstLetter,
		getCurrentTask,
	};
};
