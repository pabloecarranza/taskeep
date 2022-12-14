import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { MainArea } from './../components/Routes/MainArea';
import { useDispatch } from 'react-redux';
import { sessionIn, sessionOut } from '../features/api/sessionSlice';

export const HomePage = () => {
	const userData = JSON.parse(localStorage.getItem('identified-user'));
	const dispatch = useDispatch();
	const userCheck = () => {
		if (!userData) return dispatch(sessionOut());
		dispatch(sessionIn(userData));
	};

	useEffect(() => {
		userCheck();
	}, []);

	return (
		<Flex justifyContent='center' mt='5px'>
			<Sidebar />
			<MainArea />
		</Flex>
	);
};
