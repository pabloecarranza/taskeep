import { Text, Center, Button } from '@chakra-ui/react';
import {
	AiOutlineStar,
	AiTwotoneStar,
	AiOutlineCalendar,
} from 'react-icons/ai';
import PropTypes from 'prop-types';

export const ImportantToggle = ({ list, setSelectedTask }) => {
	return (
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
						setSelectedTask(`${list.id}?important=false`, 'setFalseImportant')
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
							setSelectedTask(`${list.id}?important=true`, 'setTrueImportant')
						}
					>
						<AiOutlineStar size='20px' />
					</Button>
				</>
			)}
		</Center>
	);
};

ImportantToggle.propTypes = {
	list: PropTypes.object.isRequired,
	setSelectedTask: PropTypes.func.isRequired,
};
