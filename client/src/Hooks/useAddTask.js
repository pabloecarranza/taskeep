import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { usePostTaskMutation } from '../features/api/taskSlice';
import { useGetListsQuery } from '../features/api/listSlice';

export const useAddTask = userData => {
	const toast = useToast();
	const { data = [], isLoading } = useGetListsQuery();

	const [PostTask, PostTaskResponse] = usePostTaskMutation();

	const [task, setTask] = useState({
		completed: false,
		important: false,
		description: '',
		reminder: 'YYYY-MM-DD',
		expiration_date: '',
		repeat: 'YYYY-MM-DD',
		notes: '',
		listid: null,
		userid: userData.id,
	});

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

		if (type === 'important') {
			setTask({
				...task,
				important: !task.important,
			});
		}
	};

	const handleSubmit = async () => {
		if (task.description.length === 0) {
			setTask({
				completed: false,
				important: task.important,
				description: '',
				reminder: 'YYYY-MM-DD',
				expiration_date: '',
				repeat: 'YYYY-MM-DD',
				notes: '',
				listid: task.listid,
				userid: userData.id,
			});
			toast({
				title: 'Error.',
				description: 'The field description cant be empty.',
				status: 'error',
				duration: 1500,
				isClosable: true,
			});
			return;
		} else {
			PostTask(task)
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

			setTask({
				completed: false,
				important: task.important,
				description: '',
				reminder: 'YYYY-MM-DD',
				expiration_date: '',
				repeat: 'YYYY-MM-DD',
				notes: '',
				listid: task.listid,
				userid: userData.id,
			});
		}
	};

	return {
		PostTaskResponse,
		handleSubmit,
		handleOnChange,
		capitalizeFirstLetter,
		data,
		task,
		isLoading,
	};
};
