import { Text, Center, Button } from '@chakra-ui/react';
import {
	AiOutlineStar,
	AiTwotoneStar,
	AiOutlineCalendar,
} from 'react-icons/ai';

interface List {
	completed: boolean;
	createdAt: string;
	description: string;
	expiration_date: string;
	id: string;
	important: boolean;
	listid: null;
	notes: string;
	reminder: string;
	repeat: string;
	updatedAt: string;
	userid: string;
}

interface Props {
	list: List,
	setSelectedTask: (args: string, args2: string) => void
}

export const ImportantToggle = ({ list, setSelectedTask }: Props) => {
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
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

