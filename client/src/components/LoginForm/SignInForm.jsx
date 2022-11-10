import React from 'react';
import {
	Box,
	Button,
	Center,
	Text,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/all';
import { animated } from 'react-spring';

export const SignInForm = ({
	fadeSignIn,
	handleClickType,
	credentials,
	show,
	handleSubmit,
	handleChange,
	handleClick,
	handleInvited,
}) => {
	return (
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

					<Button size='lg' colorScheme='blue' onClick={handleSubmit} w='80%'>
						Log In
					</Button>
				</Center>
			</Center>
		</animated.div>
	);
};
