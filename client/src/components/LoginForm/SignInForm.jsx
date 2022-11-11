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
	title,
	subtitle,
	button,
	title_form,
	place_holder_one,
	subtitle_form,
	place_holder_two,
	fast_login,
	button_two,
}) => {
	return (
		<animated.div style={fadeSignIn}>
			<Center flexDir='column' h='10rem'>
				<Box>
					<AiOutlineUser size='50px' />
				</Box>
				<Text fontSize='2xl'>{title}</Text>
				<Box>
					<Text>
						{subtitle}
						<Button
							colorScheme='blue'
							variant='link'
							ml='7px'
							onClick={handleClickType}
						>
							{button}
						</Button>
					</Text>
				</Box>
			</Center>
			<Center h='21rem' flexDir='column'>
				<Box w='80%' h='70%'>
					<FormControl isRequired>
						<FormLabel>{title_form}</FormLabel>
						<Input
							name='username'
							type='username'
							value={credentials.username}
							placeholder={place_holder_one}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl isRequired pt='10px'>
						<FormLabel>{subtitle_form}</FormLabel>
						<InputGroup size='md'>
							<Input
								name='password'
								type={show ? 'text' : 'password'}
								placeholder={place_holder_two}
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
						{fast_login}
					</Button>

					<Button size='lg' colorScheme='blue' onClick={handleSubmit} w='80%'>
						{button_two}
					</Button>
				</Center>
			</Center>
		</animated.div>
	);
};
