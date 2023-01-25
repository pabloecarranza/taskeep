import { useEffect, useState, ChangeEvent } from 'react';
import { useToast } from '@chakra-ui/react';
import { usePostTaskMutation } from '../features/api/taskSlice';
import { useGetListsQuery } from '../features/api/listSlice';
import { useDispatch } from 'react-redux';
import { sessionIn, sessionOut } from '../features/api/sessionSlice';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../utils/LocalStorage';

interface Task {
	id?: string;
	completed: boolean;
	important: boolean;
	description: string;
	reminder: string;
	expiration_date: string;
	repeat: string;
	notes: string;
	listid: ChangeEvent<HTMLInputElement> | null;
	userid: string;
}

interface Event {
	event: ChangeEvent<HTMLInputElement> | null | string;
	target: { value: string };
}

export const useAddTask = () => {
	const userData = getItem('identified-user');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userCheck = () => {
		if (!userData) {
			dispatch(sessionOut());
			navigate('/');
			return;
		}
		dispatch(sessionIn(userData));
		setTask({
			...task,
			userid: userData.id,
		});
	};

	useEffect(() => {
		userCheck();
	}, []);

	const toast = useToast();
	const { data = [], isLoading } = useGetListsQuery(undefined);

	const [PostTask, PostTaskResponse] = usePostTaskMutation();

	const [task, setTask] = useState<Task>({
		completed: false,
		important: false,
		description: '',
		reminder: 'YYYY-MM-DD',
		expiration_date: '',
		repeat: 'YYYY-MM-DD',
		notes: '',
		listid: null,
		userid: '',
	});

	function capitalizeFirstLetter(text: string) {
		const capitalized = text.charAt(0).toUpperCase() + text.slice(1);

		return capitalized;
	}

	const handleOnChange = (type: string, event: Event) => {
		if (task.id === null) {
			dispatch(sessionOut());
			navigate('/');
			return;
		}
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
		if (task.id === null) {
			dispatch(sessionOut());
			navigate('/');
			return;
		}
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
