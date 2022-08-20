import {
	Container,
	Box,
	Flex,
	Heading,
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Wrap,
	WrapItem,
	Center,
	Text,
	Spacer,
	Divider,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	ButtonGroup,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
	FiSun,
	FiStar,
	FiCalendar,
	FiUser,
	FiHome,
	FiPlay,
	FiPlus,
} from 'react-icons/fi';

export const Sidebar = () => {
	const [isloaded, setIsloaded] = React.useState(false);

	return (
		<Box
			w='20%'
			p={4}
			bg='brand.700'
			color='white'
			borderRadius='20px'
			h='98vh'
		>
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
							Pablo Carranza
						</Heading>

						<Spacer />
						<Text fontSize='xs'>pabloecarranza@gmail.com</Text>
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
				leftIcon={<FiHome />}
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
				leftIcon={<FiPlus />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
				mb='10px'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={9}>
					Nueva Lista
				</SkeletonText>
			</Button>
			<Divider />
			<Flex
				flexDirection='column'
				justifyContent='space-between'
				h='50%'
				w='100%'
			>
				<Button
					leftIcon={<FiPlay />}
					variant='white'
					_hover={{ bg: '#44444442', color: '#0084ff' }}
					justifyContent='flex-start'
					onClick={() => setIsloaded(v => !v)}
				>
					Introducción
				</Button>
			</Flex>
		</Box>
	);
};
