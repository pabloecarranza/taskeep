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
	useToast,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { useSignInMutation, useSignUpMutation } from '../features/api/apiSlice';
import { useSpring, animated } from 'react-spring';

export const LoginForm = () => {
	const [signUp, setSignUp] = React.useState(false);
	const [show, setShow] = React.useState(false);
	const [credentials, setCredentials] = React.useState({
		username: '',
		password: '',
		email: '',
	});
	const toast = useToast();
	const fadeSignUp = useSpring({
		opacity: signUp ? 1 : 0,
	});
	const fadeSignIn = useSpring({
		opacity: signUp ? 0 : 1,
	});
	const [SignIn, SignInResponse] = useSignInMutation();
	const [SignUp, SignUpResponse] = useSignUpMutation();
	let navigate = useNavigate();
	const handleClick = () => setShow(!show);
	const handleClickType = () => {
		setSignUp(!signUp);
	};
	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};
	console.log('outside', SignInResponse.isSuccess);

	const handleInvited = async () => {
		const invitedCredentials = {
			username: 'Invited',
			password: '1234',
		};
		SignIn(invitedCredentials)
			.unwrap()
			.then(respon => {
				toast({
					title: `${respon.message}`,
					status: 'success',
					isClosable: true,
				});
				console.log('inside', SignInResponse);
				setTimeout(() => {
					navigate('/homepage', { replace: true });
				}, 1000);
			})
			.catch(error => {
				toast({
					title: `${error.data.message}`,
					status: 'error',
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
				title: `The fields cant be empty`,
				status: 'error',
				isClosable: true,
			});

			return;
		} else if (!signUp) {
			SignIn(credentials)
				.unwrap()
				.then(respon => {
					toast({
						title: `${respon.message}`,
						status: 'success',
						isClosable: true,
					});
					console.log('inside', SignInResponse);
					setTimeout(() => {
						navigate('/homepage', { replace: true });
					}, 1000);
				})
				.catch(error => {
					toast({
						title: `${error.data.message}`,
						status: 'error',
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
						title: `${respon.message}`,
						status: 'success',
						isClosable: true,
					});
					setTimeout(() => {
						navigate('/homepage', { replace: true });
					}, 50000);
				})
				.catch(error => {
					toast({
						title: `${error.data.message}`,
						status: 'error',
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

	return (
		<Box w='25rem' h='31rem' boxShadow='dark-lg' rounded='md' bg='#1A202C'>
			{SignInResponse.isSuccess ? (
				<animated.div style={fadeSignIn}>
					<Alert
						status='success'
						variant='blackAlpha'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						textAlign='center'
						height='100%'
					>
						<AlertIcon boxSize='40px' mr={0} />
						<AlertTitle mt={4} mb={1} fontSize='lg'>
							User Log In successfully!
						</AlertTitle>
						<AlertDescription maxWidth='sm'>
							Welcome back ! We love having you here.
						</AlertDescription>
					</Alert>
				</animated.div>
			) : (
				<>
					{SignUpResponse.isSuccess ? (
						<Alert
							status='success'
							variant='blackAlpha'
							flexDirection='column'
							alignItems='center'
							justifyContent='center'
							textAlign='center'
							height='100%'
						>
							<AlertIcon boxSize='40px' mr={0} />
							<AlertTitle mt={4} mb={1} fontSize='lg'>
								User created successfully!
							</AlertTitle>
							<AlertDescription maxWidth='sm'>
								Thank you for your subscription to our application, we hope you
								enjoy it.
							</AlertDescription>
						</Alert>
					) : (
						<>
							{SignInResponse.isLoading || SignUpResponse.isLoading ? (
								<Center pt='50%'>
									<Spinner size='xl' color='blue.500' />
								</Center>
							) : (
								<>
									{signUp ? (
										<animated.div style={fadeSignUp}>
											<Center flexDir='column' h='10rem'>
												<Box>
													<AiOutlineUserAdd size='50px' />
												</Box>
												<Text fontSize='2xl'>Create an Account</Text>
												<Box>
													<Text>
														Already have an account?
														<Button
															colorScheme='blue'
															variant='link'
															ml='7px'
															onClick={handleClickType}
														>
															Log In.
														</Button>
													</Text>
												</Box>
											</Center>
											<Center flexDir='column' h='21rem'>
												<Flex flexDir='column' w='80%'>
													<FormControl isRequired pt='5px'>
														<FormLabel>User Name</FormLabel>
														<Input
															name='username'
															type='username'
															value={credentials.username}
															placeholder='Name'
															onChange={handleChange}
														/>
													</FormControl>
													<FormControl isRequired pt='5px'>
														<FormLabel>Email</FormLabel>
														<Input
															name='email'
															type='email'
															value={credentials.email}
															placeholder='email'
															onChange={handleChange}
														/>
													</FormControl>
													<FormControl isRequired pt='5px'>
														<FormLabel>Password</FormLabel>
														<InputGroup size='md'>
															<Input
																name='password'
																type={show ? 'text' : 'password'}
																placeholder='Password'
																value={credentials.password}
																onChange={handleChange}
															/>
															<InputRightElement width='4.5rem'>
																<Button
																	h='1.75rem'
																	size='sm'
																	onClick={handleClick}
																	colorScheme='blue'
																	variant='ghost'
																>
																	{show ? 'Hide' : 'Show'}
																</Button>
															</InputRightElement>
														</InputGroup>
													</FormControl>
												</Flex>
												<Center flexDir='column' h='70%' w='100%'>
													<Button
														size='lg'
														colorScheme='blue'
														onClick={handleSubmit}
														w='80%'
													>
														Create Account
													</Button>
												</Center>
											</Center>
										</animated.div>
									) : (
										<animated.div style={fadeSignIn}>
											<Center flexDir='column' h='10rem'>
												<Box>
													<AiOutlineUser size='50px' />
												</Box>
												<Text fontSize='2xl'>Sign In</Text>
												<Box>
													<Text>
														You don&apos;t have an account?
														<Button
															colorScheme='blue'
															variant='link'
															ml='7px'
															onClick={handleClickType}
														>
															Sign Up.
														</Button>
													</Text>
												</Box>
											</Center>
											<Center h='21rem' flexDir='column'>
												<Box w='80%' h='70%'>
													<FormControl isRequired>
														<FormLabel>User Name</FormLabel>
														<Input
															name='username'
															type='username'
															value={credentials.username}
															placeholder='Name'
															onChange={handleChange}
														/>
													</FormControl>
													<FormControl isRequired pt='10px'>
														<FormLabel>Password</FormLabel>
														<InputGroup size='md'>
															<Input
																name='password'
																type={show ? 'text' : 'password'}
																placeholder='Password'
																value={credentials.password}
																onChange={handleChange}
															/>
															<InputRightElement width='4.5rem'>
																<Button
																	h='1.75rem'
																	size='sm'
																	onClick={handleClick}
																	colorScheme='blue'
																	variant='ghost'
																>
																	{show ? 'Hide' : 'Show'}
																</Button>
															</InputRightElement>
														</InputGroup>
													</FormControl>
												</Box>
												<Center flexDir='column' h='30%' w='100%'>
													<Button
														colorScheme='gray'
														variant='link'
														onClick={handleInvited}
														pb='8px'
													>
														Enter as a guest
													</Button>

													<Button
														size='lg'
														colorScheme='blue'
														onClick={handleSubmit}
														w='80%'
													>
														Log In
													</Button>
												</Center>
											</Center>
										</animated.div>
									)}
								</>
							)}
						</>
					)}
				</>
			)}
		</Box>
	);
};
