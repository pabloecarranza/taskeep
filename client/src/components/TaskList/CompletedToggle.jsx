import { Text, Center, Button } from '@chakra-ui/react';
import { BiCircle, BiChevronDownCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';

export const CompletedToggle = ({
	list,
	setSelectedTask,
	capitalizeFirstLetter,
	listName,
}) => {
	return (
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
						setSelectedTask(`${list.id}?completed=false`, 'setFalseCompleted')
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
						setSelectedTask(`${list.id}?completed=true`, 'setTrueCompleted')
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
	);
};

CompletedToggle.propTypes = {
	list: PropTypes.object.isRequired,
	setSelectedTask: PropTypes.func.isRequired,
	capitalizeFirstLetter: PropTypes.func.isRequired,
	listName: PropTypes.func.isRequired,
};
