import React from 'react';
import {
	Box,
	Text,
	Center,
	Flex,
	Heading,
	Button,
	useToast,
	useDisclosure,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import {
	AiOutlineStar,
	AiTwotoneStar,
	AiOutlineCalendar,
	AiOutlineDelete,
} from 'react-icons/ai';
import {
	BiCheckbox,
	BiCheckboxChecked,
	BiCircle,
	BiChevronDownCircle,
} from 'react-icons/bi';
import {
	useDeleteTaskMutation,
	useGetTaskMutation,
	useGetTasksQuery,
	useHotPutTaskMutation,
} from '../features/api/taskSlice';
import { useGetListsQuery } from '../features/api/listSlice';
import { DrawerTask } from '../components/DrawerTask';
import { currentTask } from '../features/api/sessionSlice';
import { useDispatch } from 'react-redux';
export const TasksList = ({ data = [] }) => {
	useDispatch;

	const dispatch = useDispatch();
	const toast = useToast();
	const [HotPutTask] = useHotPutTaskMutation();
	const [DeleteTask] = useDeleteTaskMutation();

	const {
		isOpen: isOpenDrawerTask,
		onOpen: onOpenDrawerTask,
		onClose: onCloseDrawerTask,
	} = useDisclosure();
	const { data: lists = [], refetch } = useGetListsQuery();

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
			console.log('debe abrir');
			dispatch(currentTask(task));
			onOpenDrawerTask();
			return;
		}

		if (e === 'setFalseCompleted') {
			console.log('entreSetFalse');
			HotPutTask(task);
			return;
		}
		if (e === 'setTrueCompleted') {
			console.log('entreSetTrue');
			HotPutTask(task);
			return;
		}
		if (e === 'setFalseImportant') {
			console.log('setfalse con', task);
			HotPutTask(task);
			return;
		}
		if (e === 'setTrueImportant') {
			console.log('settrue con', task);
			console.log(data);
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
					duration: 3000,
					isClosable: true,
				});
			})
			.catch(error => {
				toast({
					title: 'Error',
					description: `${error.data.message}`,
					status: 'error',
					duration: 2000,
					isClosable: true,
				});
			});
	}

	return (
		<>
			<DrawerTask
				isOpen={isOpenDrawerTask}
				onClose={onCloseDrawerTask}
				onOpen={onOpenDrawerTask}
			/>
			{data.map(list => (
				<>
					<Center
						minWidth='max-content'
						w='100%'
						alignItems='center'
						gap='2'
						bg='gray.700'
						color='white'
						borderRadius='10px'
						boxShadow='lg'
						_hover={{ bg: 'gray.600' }}
						_active={{
							bg: 'gray.600',
						}}
						mb='7px'
						h='55px'
					>
						<Center p='2' pl='5px' w='90%' justifyContent='flex-start'>
							{list.completed ? (
								<Button
									_hover={{ bg: 'gray.600', color: '#0084ff' }}
									bg='#f5f5f50'
									key={list.id}
									_active={{
										bg: 'gray.600',
									}}
									zIndex='popover'
									onClick={e =>
										setSelectedTask(
											`${list.id}?completed=false`,
											'setFalseCompleted'
										)
									}
								>
									<BiChevronDownCircle size='25px' />
								</Button>
							) : (
								<Button
									_hover={{ bg: 'gray.600', color: '#0084ff' }}
									bg='#f5f5f50'
									value='completed'
									name={list.name}
									zIndex='popover'
									onClick={e =>
										setSelectedTask(
											`${list.id}?completed=true`,
											'setTrueCompleted'
										)
									}
								>
									<BiCircle size='25px' />
								</Button>
							)}
							<Button
								w='100%'
								alignItems='center'
								color='white'
								bg='#f5f5f50'
								justifyContent='flex-start'
								_hover={{ bg: 'gray.600' }}
								_active={{
									bg: 'gray.600',
								}}
								onClick={e => setSelectedTask(list, 'openTask')}
							>
								<Text pl='20px' size='md'>
									{list.description}
								</Text>
								<Text pl='20px' size='md' color='gray.500'>
									{capitalizeFirstLetter(listName(list.listid))}
								</Text>
								<Text pl='20px' size='md' color='gray.500' as='i'>
									{capitalizeFirstLetter(list.notes)}
								</Text>
							</Button>
						</Center>

						<Center p='2' w='40%' h='50px' justifyContent='flex-end'>
							{list.expiration_date ? (
								<>
									<AiOutlineCalendar color='gray' />
									<Text pr='30px' pl='10px' color='gray.500'>
										{' '}
										{list.expiration_date}
									</Text>
								</>
							) : (
								<></>
							)}

							{list.important ? (
								<Button
									_hover={{ bg: 'gray.600', color: '#0084ff' }}
									bg='#f5f5f50'
									key={list.id}
									_active={{
										bg: 'gray.600',
									}}
									onClick={e =>
										setSelectedTask(
											`${list.id}?important=false`,
											'setFalseImportant'
										)
									}
								>
									<AiTwotoneStar size='20px' />
								</Button>
							) : (
								<>
									<Button
										_hover={{ bg: 'gray.600', color: '#0084ff' }}
										bg='#f5f5f50'
										key={list.id}
										_active={{
											bg: 'gray.600',
										}}
										onClick={e =>
											setSelectedTask(
												`${list.id}?important=true`,
												'setTrueImportant'
											)
										}
									>
										<AiOutlineStar size='20px' />
									</Button>
								</>
							)}
						</Center>
						<Button
							_hover={{ bg: 'gray.600', color: 'red' }}
							bg='#f5f5f50'
							color='gray.500'
							key={list.id}
							_active={{
								bg: 'gray.600',
							}}
							onClick={() => deleteTaskSubmit(list.id)}
						>
							<AiOutlineDelete size='25px' />
						</Button>
					</Center>
				</>
			))}
		</>
	);
};
