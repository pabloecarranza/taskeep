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
					<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
				</Box>
				<Box w='100%'>
					<Heading as='h5' size='xs'>
						Pablo Carranza
					</Heading>
					<Spacer />
					<Text fontSize='xs'>pabloecarranza@gmail.com</Text>
				</Box>
			</Flex>

			<InputGroup size='sm'>
				<Input placeholder='Buscar' variant='outline' />
				<InputRightElement children={<FaSearch />} />
			</InputGroup>
			<Button
				leftIcon={<FiSun />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				Mi día
			</Button>
			<Button
				leftIcon={<FiStar />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				Importante
			</Button>
			<Button
				leftIcon={<FiCalendar />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				Planeado
			</Button>
			<Button
				leftIcon={<FiUser />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				Asignado a mi usuario
			</Button>
			<Button
				leftIcon={<FiHome />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				Tareas
			</Button>
			<Button
				leftIcon={<FiPlus />}
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
				mb='10px'
			>
				Nueva Lista
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
				>
					Introducción
				</Button>
			</Flex>
		</Box>
	);
};
