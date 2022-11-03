import {
	Box,
	Flex,
	Heading,
	Avatar,
	Text,
	Spacer,
	Divider,
	Button,
	SkeletonCircle,
	SkeletonText,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FiSun, FiStar, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { useGetListsQuery } from '../../features/api/listSlice';
import { MdPostAdd } from 'react-icons/md';
import { ModalWelcome } from './../Modals/ModalWelcome';
import { ModalAddList } from '../Modals/ModalAddList/ModalAddList';
import { Lists } from './Lists';
import { Link, useNavigate } from 'react-router-dom';
import { ModalWelcomeDates } from '../../utils/ModalWelcome.dates';

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
	const navigate = useNavigate();
	const userData = JSON.parse(localStorage.getItem('identified-user'));

	useEffect(() => {
		onOpenWelcomeModal();

		navigate('/homepage/myday');
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
				{...ModalWelcomeDates}
			/>
			<ModalAddList isOpen={isOpenAddListModal} onClose={onCloseAddListModal} />

			<Button w='100%' variant='white' _hover={{ color: '#0084ff' }} mb='13px'>
				<Flex w='100%' alignItems='center' pb='15px'>
					<Box w='40%'>
						<SkeletonCircle size='12' isLoaded={isloaded} fadeDuration={1}>
							<Avatar size='md' name={userData.username} />
						</SkeletonCircle>
					</Box>
					<Flex w='100%' textAlign='left'>
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
					</Flex>
				</Flex>
			</Button>
			<Button
				isActive='true'
				leftIcon={<FiSun />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={4}>
					<Link to='/homepage/myday'>My day</Link>
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
					<Link to='/homepage/important'>Important</Link>
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
					<Link to='/homepage/planing'>Planing</Link>
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
					<Link to='/homepage/completed'>Completed</Link>
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
					Add new list
				</SkeletonText>
			</Button>
			<Divider />
			<Flex
				flexDirection='column'
				justifyContent='flex-start'
				h='30%'
				w='100%'
				overflow='auto'
			>
				<SkeletonText
					noOfLines={3}
					isLoaded={isloaded}
					fadeDuration={9}
					spacing='6'
				>
					<Lists data={data} />
				</SkeletonText>
			</Flex>
		</Box>
	);
};
