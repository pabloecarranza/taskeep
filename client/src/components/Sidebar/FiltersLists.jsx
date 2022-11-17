import { Button, SkeletonText } from '@chakra-ui/react';
import React from 'react';
import { FiSun, FiStar, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const FiltersLists = ({
	isloaded,
	onOpenAddListModal,
	main,
	important,
	planing,
	completed,
	add,
}) => {
	return (
		<>
			<Button
				isActive='true'
				leftIcon={<FiSun />}
				variant='white'
				colorScheme='blue'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				w='100%'
				justifyContent='flex-start'
			>
				<SkeletonText noOfLines={1} isLoaded={isloaded} fadeDuration={4}>
					<Link to='/homepage/myday'>{main}</Link>
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
					<Link to='/homepage/important'>{important}</Link>
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
					<Link to='/homepage/planing'>{planing}</Link>
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
					<Link to='/homepage/completed'>{completed}</Link>
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
					{add}
				</SkeletonText>
			</Button>
		</>
	);
};

FiltersLists.propTypes = {
	isloaded: PropTypes.bool.isRequired,
	onOpenAddListModal: PropTypes.func.isRequired,
	main: PropTypes.string.isRequired,
	important: PropTypes.string.isRequired,
	planing: PropTypes.string.isRequired,
	completed: PropTypes.string.isRequired,
	add: PropTypes.string.isRequired,
};
