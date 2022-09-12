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
} from 'react-icons/ai';
import {
	BiCheckbox,
	BiCheckboxChecked,
	BiCircle,
	BiChevronDownCircle,
} from 'react-icons/bi';
import {
	useGetTaskMutation,
	useGetTasksQuery,
} from '../features/api/taskSlice';
import { useGetListsQuery } from '../features/api/listSlice';
import { DrawerTask } from '../components/DrawerTask';
import { currentTask } from '../features/api/sessionSlice';
import { useDispatch } from 'react-redux';
export const TasksList = () => {
	useDispatch;

	const dispatch = useDispatch();
	const { data = [] } = useGetTasksQuery();
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

	function setSelectedTask(task) {
		dispatch(currentTask(task));
		onOpenDrawerTask();
	}

	return (
		<>
			<DrawerTask
				isOpen={isOpenDrawerTask}
				onClose={onCloseDrawerTask}
				onOpen={onOpenDrawerTask}
			/>
			{data.map(list => (
				<Button
					minWidth='max-content'
					w='100%'
					alignItems='center'
					gap='2'
					bg='gray.700'
					color='white'
					borderRadius='10px'
					boxShadow='dark-lg'
					_hover={{ bg: 'gray.600' }}
					mb='7px'
					key={list.id}
					h='55px'
					onClick={e => setSelectedTask(list)}
				>
					<Center p='2' pl='5px' w='90%' justifyContent='flex-start'>
						<Button _hover={{ bg: 'gray.600', color: '#0084ff' }} bg='#f5f5f50'>
							<BiCircle size='25px' />
						</Button>
						<Button _hover={{ bg: 'gray.600', color: '#0084ff' }} bg='#f5f5f50'>
							<BiChevronDownCircle size='25px' />
						</Button>
						<Text pl='20px' size='md'>
							{list.description}
						</Text>
						<Text pl='20px' size='md' color='gray.500'>
							{capitalizeFirstLetter(listName(list.listid))}
						</Text>
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
								on
								_hover={{ bg: 'gray.600', color: '#0084ff' }}
								bg='#f5f5f50'
							>
								<AiTwotoneStar size='20px' />
							</Button>
						) : (
							<Button
								_hover={{ bg: 'gray.600', color: '#0084ff' }}
								bg='#f5f5f50'
							>
								<AiOutlineStar size='20px' />
							</Button>
						)}
					</Center>
				</Button>
			))}
		</>
	);
};
