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
} from '@chakra-ui/react';
import { AiOutlineUserAdd } from 'react-icons/all';
import { animated } from 'react-spring';

export const SignUpForm = ({
	fadeSignUp,
	handleClickType,
	credentials,
	show,
	handleSubmit,
	handleChange,
	handleClick,
}) => {
	return (
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
					<Button size='lg' colorScheme='blue' onClick={handleSubmit} w='80%'>
						Create Account
					</Button>
				</Center>
			</Center>
		</animated.div>
	);
};
