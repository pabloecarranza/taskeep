import React from 'react';

import {
	Box,
	Button,
	Center,
	Text,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Spinner,
} from '@chakra-ui/react';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/all';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../features/auth/authSlice';

export const LoginForm = () => {
	const dispatch = useDispatch();
	const [signUp, setSignUp] = React.useState(false);
	const [show, setShow] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [credentials, setCredentials] = React.useState({
		username: '',
		password: '',
	});
	const handleClick = () => setShow(!show);
	const handleClickType = () => {
		setSignUp(!signUp);
	};
	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		if (credentials.username === '' || credentials.password === '') {
			return alert('el campo no puede estar vacio');
		}
		if (signUp) {
			setLoading(true);
			/* const response = await axios.post(
				'http://localhost:4000/signup',
				credentials
			); */
			dispatch(signUpAction(credentials));
			setLoading(false);
		} else {
			setLoading(true);
			const response = await axios.post(
				'http://localhost:4000/signin',
				credentials
			);

			setLoading(false);
			console.log(response);
		}
	};

	return (
		<Box w="30vw" h="80vh" boxShadow="dark-lg" p="6" rounded="md" bg="#1A202C">
			{loading ? (
				<Center pt="50%">
					<Spinner size="xl" color="blue.500" />
				</Center>
			) : (
				<>
					{signUp ? (
						<>
							<Center flexDir="column" h="30%">
								<Box>
									<AiOutlineUserAdd size="50px" />
								</Box>
								<Text fontSize="2xl">Create an Account</Text>
								<Box>
									<Text>
										Already have an account?
										<Button
											colorScheme="blue"
											variant="link"
											ml="7px"
											onClick={handleClickType}
										>
											Log In.
										</Button>
									</Text>
								</Box>
							</Center>
							<Flex h="70%" flexDir="column" justifyContent="space-between">
								<Box>
									<FormControl isRequired pt="5px">
										<FormLabel>User Name</FormLabel>
										<Input
											name="username"
											type="username"
											placeholder="Name"
											onChange={handleChange}
										/>
									</FormControl>
									<FormControl isRequired pt="5px">
										<FormLabel>Email</FormLabel>
										<Input
											name="email"
											type="email"
											placeholder="email"
											onChange={handleChange}
										/>
									</FormControl>
									<FormControl isRequired pt="5px">
										<FormLabel>Password</FormLabel>
										<InputGroup size="md">
											<Input
												name="password"
												type={show ? 'text' : 'password'}
												placeholder="Password"
												onChange={handleChange}
											/>
											<InputRightElement width="4.5rem">
												<Button
													h="1.75rem"
													size="sm"
													onClick={handleClick}
													colorScheme="blue"
													variant="ghost"
												>
													{show ? 'Hide' : 'Show'}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
								</Box>
								<Button size="lg" colorScheme="blue" onClick={handleSubmit}>
									Create Account
								</Button>
							</Flex>
						</>
					) : (
						<>
							<Center flexDir="column" h="40%">
								<Box>
									<AiOutlineUser size="50px" />
								</Box>
								<Text fontSize="2xl">Sign In</Text>
								<Box>
									<Text>
										You don&apos;t have an account?
										<Button
											colorScheme="blue"
											variant="link"
											ml="7px"
											onClick={handleClickType}
										>
											Sign Up.
										</Button>
									</Text>
								</Box>
							</Center>
							<Flex h="60%" flexDir="column" justifyContent="space-between">
								<Box>
									<FormControl isRequired>
										<FormLabel>User Name</FormLabel>
										<Input
											name="username"
											type="username"
											placeholder="Name"
											onChange={handleChange}
										/>
									</FormControl>
									<FormControl isRequired pt="10px">
										<FormLabel>Password</FormLabel>
										<InputGroup size="md">
											<Input
												name="password"
												type={show ? 'text' : 'password'}
												placeholder="Password"
												onChange={handleChange}
											/>
											<InputRightElement width="4.5rem">
												<Button
													h="1.75rem"
													size="sm"
													onClick={handleClick}
													colorScheme="blue"
													variant="ghost"
												>
													{show ? 'Hide' : 'Show'}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
								</Box>
								<Button size="lg" colorScheme="blue" onClick={handleSubmit}>
									Log In
								</Button>
							</Flex>
						</>
					)}
				</>
			)}
		</Box>
	);
};
