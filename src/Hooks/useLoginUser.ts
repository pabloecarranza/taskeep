import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import {
	useSignInMutation,
	useSignUpMutation,
} from '../features/api/authSlice';
import { useDispatch } from 'react-redux';
import { sessionIn } from '../features/api/sessionSlice';

interface Event {
	event: ChangeEvent<HTMLInputElement> | null | string;
	target: { value: string; name: string };
}

export const useLoginUser = () => {
	const dispatch = useDispatch();
	const toast = useToast();
	const [signUp, setSignUp] = useState(false);
	const [show, setShow] = useState(true);
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
		email: '',
	});

	const [SignIn, SignInResponse] = useSignInMutation();
	const [SignUp, SignUpResponse] = useSignUpMutation();
	const navigate = useNavigate();
	const handleClick = () => setShow(!show);
	const handleClickType = () => {
		setSignUp(!signUp);
	};

	const handleChange = (e: Event) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleInvited = async () => {
		const invitedCredentials = {
			username: 'Invited',
			password: '1234',
		};
		SignIn(invitedCredentials)
			.unwrap()
			.then(respon => {
				toast({
					title: 'Success.',
					description: `${respon.message}`,
					status: 'success',
					duration: 1500,
					isClosable: true,
				});

				localStorage.setItem('identified-user', JSON.stringify(respon));
				dispatch(sessionIn(respon));
			})
			.catch(error => {
				toast({
					title: 'Error',
					description: `${error.data.message}`,
					status: 'error',
					duration: 1500,
					isClosable: true,
				});
			});
	};

	const handleSubmit = async () => {
		if (
			credentials.username.length === 0 ||
			credentials.password.length === 0
		) {
			setCredentials({
				username: '',
				password: '',
				email: '',
			});

			toast({
				title: 'Error.',
				description: 'The fields cant be empty.',
				status: 'error',
				duration: 1500,
				isClosable: true,
			});
		} else if (!signUp) {
			SignIn(credentials)
				.unwrap()
				.then(respon => {
					toast({
						title: 'Success.',
						description: `${respon.message}`,
						status: 'success',
						duration: 1500,
						isClosable: true,
					});
					localStorage.setItem('identified-user', JSON.stringify(respon));
					dispatch(sessionIn(respon));
				})
				.catch(error => {
					toast({
						title: 'Error',
						description: `${error.data.message}`,
						status: 'error',
						duration: 1500,
						isClosable: true,
					});
				});
			setCredentials({
				username: '',
				password: '',
				email: '',
			});
		} else {
			SignUp(credentials)
				.unwrap()
				.then(respon => {
					toast({
						title: 'Success.',
						description: `${respon.message}`,
						status: 'success',
						duration: 1500,
						isClosable: true,
					});
					localStorage.setItem('identified-user', JSON.stringify(respon));
					dispatch(sessionIn(respon));
				})
				.catch(error => {
					toast({
						title: 'Account created.',
						description: `${error.data.message}`,
						status: 'error',
						duration: 1500,
						isClosable: true,
					});
				});
			setCredentials({
				username: '',
				password: '',
				email: '',
			});
		}
	};

	return {
		signUp,
		SignInResponse,
		SignUpResponse,
		navigate,
		handleClick,
		handleClickType,
		handleChange,
		handleInvited,
		handleSubmit,
		credentials,
		show,
	};
};
