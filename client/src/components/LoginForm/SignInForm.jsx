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
import PropTypes from 'prop-types';

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
	titleForm,
	placeHolderOne,
	subtitleForm,
	placeHolderTwo,
	fastLogin,
	buttonTwo,
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
						<FormLabel>{titleForm}</FormLabel>
						<Input
							name='username'
							type='username'
							value={credentials.username}
							placeholder={placeHolderOne}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl isRequired pt='10px'>
						<FormLabel>{subtitleForm}</FormLabel>
						<InputGroup size='md'>
							<Input
								name='password'
								type={show ? 'text' : 'password'}
								placeholder={placeHolderTwo}
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
						{fastLogin}
					</Button>

					<Button size='lg' colorScheme='blue' onClick={handleSubmit} w='80%'>
						{buttonTwo}
					</Button>
				</Center>
			</Center>
		</animated.div>
	);
};

SignInForm.propTypes = {
	fadeSignIn: PropTypes.object.isRequired,
	handleClickType: PropTypes.func.isRequired,
	credentials: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	handleInvited: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	button: PropTypes.string.isRequired,
	titleForm: PropTypes.string.isRequired,
	placeHolderOne: PropTypes.string.isRequired,
	subtitleForm: PropTypes.string.isRequired,
	placeHolderTwo: PropTypes.string.isRequired,
	fastLogin: PropTypes.string.isRequired,
	buttonTwo: PropTypes.string.isRequired,
};
