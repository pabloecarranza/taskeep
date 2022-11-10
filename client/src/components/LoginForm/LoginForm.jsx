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
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	ScaleFade,
	SlideFade,
} from '@chakra-ui/react';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/all';
import { useSpring, animated } from 'react-spring';
import { useLoginUser } from '../../Hooks/useLoginUser';
import { LoginSuccessfully } from './LoginSuccessfully';
import {
	SignInSuccessfullyDates,
	SignUpSuccessfullyDates,
} from '../../utils/EnglishTexts';

export const LoginForm = () => {
	const {
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
	} = useLoginUser();

	const fadeSignUp = useSpring({
		opacity: signUp ? 1 : 0,
	});
	const fadeSignIn = useSpring({
		opacity: signUp ? 0 : 1,
	});
	console.log(SignInResponse.isSuccess);
	return (
		<Box w='25rem' h='31rem' boxShadow='dark-lg' rounded='md' bg='#1A202C'>
			{SignInResponse.isSuccess ? (
				<LoginSuccessfully navigate={navigate} {...SignInSuccessfullyDates} />
			) : (
				<>
					{SignUpResponse.isSuccess ? (
						<LoginSuccessfully
							navigate={navigate}
							{...SignUpSuccessfullyDates}
						/>
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
												<Center flexDir='column' h='34%' w='100%'>
													<Button
														colorScheme='gray'
														variant='link'
														onClick={handleInvited}
														pb='11px'
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
