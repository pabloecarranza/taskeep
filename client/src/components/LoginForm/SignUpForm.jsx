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
import PropTypes from 'prop-types';

export const SignUpForm = ({
	fadeSignUp,
	handleClickType,
	credentials,
	show,
	handleSubmit,
	handleChange,
	handleClick,
	title,
	subtitle,
	button,
	title_form,
	place_holder_one,
	subtitle_form,
	place_holder_two,
	title_form_two,
	place_holder_three,
	button_two,
}) => {
	return (
		<animated.div style={fadeSignUp}>
			<Center flexDir='column' h='10rem'>
				<Box>
					<AiOutlineUserAdd size='50px' />
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
			<Center flexDir='column' h='21rem'>
				<Flex flexDir='column' w='80%'>
					<FormControl isRequired pt='5px'>
						<FormLabel>{title_form}</FormLabel>
						<Input
							name='username'
							type='username'
							value={credentials.username}
							placeholder={place_holder_one}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl isRequired pt='5px'>
						<FormLabel>{subtitle_form}</FormLabel>
						<Input
							name='email'
							type='email'
							value={credentials.email}
							placeholder={place_holder_two}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl isRequired pt='5px'>
						<FormLabel>{title_form_two}</FormLabel>
						<InputGroup size='md'>
							<Input
								name='password'
								type={show ? 'text' : 'password'}
								placeholder={place_holder_three}
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
						{button_two}
					</Button>
				</Center>
			</Center>
		</animated.div>
	);
};

SignUpForm.propTypes = {
	fadeSignUp: PropTypes.object.isRequired,
	handleClickType: PropTypes.func.isRequired,
	credentials: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	button: PropTypes.string.isRequired,
	title_form: PropTypes.string.isRequired,
	place_holder_one: PropTypes.string.isRequired,
	subtitle_form: PropTypes.string.isRequired,
	place_holder_two: PropTypes.string.isRequired,
	button_two: PropTypes.string.isRequired,
};
