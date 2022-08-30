import {
	Box,
	Flex,
	Heading,
	Avatar,
	Text,
	Spacer,
	Divider,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
	FiSun,
	FiStar,
	FiCalendar,
	FiUser,
	FiCheckCircle,
} from 'react-icons/fi';
import { useGetListsQuery } from '../../features/api/listSlice';

import { BiTask } from 'react-icons/bi';
import { CgList } from 'react-icons/cg';
import { MdPostAdd } from 'react-icons/md';
import { ModalWelcome } from './../Modals/ModalWelcome';
import { ModalAddList } from '../Modals/ModalAddList';
import { TaskLists } from './TaskLists';

export const Sidebar = () => {
	const {
		isOpen: isOpenWelcomeModal,
		onOpen: onOpenWelcomeModal,
		onClose: onCloseWelcomeModal,
	} = useDisclosure();

	const {
		isOpen: isOpenAddListModal,
		onOpen: onOpenAddListModal,
		onClose: onCloseAddListModal,
	} = useDisclosure();

	const [isloaded, setIsloaded] = React.useState(false);
	const { data = [], error, isLoading, refetch } = useGetListsQuery();

	const userData = JSON.parse(localStorage.getItem('identified-user'));

	console.log(userData);
	useEffect(() => {
		onOpenWelcomeModal();
	}, []);

	return (
		<Box
			w='20%'
			p={4}
			bg='brand.700'
			color='white'
			borderRadius='20px'
			h='98vh'
		>
			<ModalWelcome
				isOpen={isOpenWelcomeModal}
				onClose={onCloseWelcomeModal}
				setIsloaded={setIsloaded}
			/>
			<ModalAddList isOpen={isOpenAddListModal} onClose={onCloseAddListModal} />

			<Flex w='100%' alignItems='center' pb='15px'>
				<Box w='40%'>
					<SkeletonCircle size='12' isLoaded={isloaded} fadeDuration={1}>
						<Avatar
							size='md'
							name='Dan Abrahmov'
							src='https://bit.ly/dan-abramov'
						/>
					</SkeletonCircle>
				</Box>
				<Box w='100%'>
					<SkeletonText
						mt='2'
						noOfLines={2}
						isLoaded={isloaded}
						fadeDuration={2}
						spacing='2'
					>
						<Heading as='h5' size='xs'>
							{userData.username}
						</Heading>

						<Spacer />
						<Text fontSize='xs'>{userData.email}</Text>
					</SkeletonText>
				</Box>
			</Flex>

			<Skeleton isLoaded={isloaded} fadeDuration={3}>
				<InputGroup size='sm'>
					<Input placeholder='Buscar' variant='outline' />
					<InputRightElement children={<FaSearch />} />
				</InputGroup>
			</Skeleton>
			<Button
				leftIcon={<FiSun />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={4}>
					Mi día
				</SkeletonText>
			</Button>

			<Button
				leftIcon={<FiStar />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={5}>
					Importante
				</SkeletonText>
			</Button>
			<Button
				leftIcon={<FiCalendar />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={6}>
					Planeado
				</SkeletonText>
			</Button>
			<Button
				leftIcon={<FiCheckCircle />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={6}>
					Completadas
				</SkeletonText>
			</Button>
			<Button
				leftIcon={<FiUser />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={7}>
					Asignado a mi usuario
				</SkeletonText>
			</Button>
			<Button
				leftIcon={<BiTask />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={8}>
					Tareas
				</SkeletonText>
			</Button>
			<Button
				leftIcon={<MdPostAdd />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
				mb='10px'
				onClick={onOpenAddListModal}
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={9}>
					Nueva Lista
				</SkeletonText>
			</Button>
			<Divider />
			<Flex flexDirection='column' justifyContent='flex-start' h='50%' w='100%'>
				<SkeletonText
					noOfLines={3}
					isLoaded={isloaded}
					fadeDuration={9}
					spacing='6'
				>
					<TaskLists data={data} />
				</SkeletonText>
			</Flex>
		</Box>
	);
};
