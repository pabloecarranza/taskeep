import { Button, SkeletonText } from '@chakra-ui/react';
import React from 'react';
import { FiSun, FiStar, FiCalendar, FiCheckCircle } from 'react-icons/fi';

import { MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const DefaultLists = ({ isloaded, onOpenAddListModal }) => {
	return (
		<>
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
		</>
	);
};
