import {
	Heading,
	Container,
	Box,
	Center,
	Button,
	Text,
	Image,
} from '@chakra-ui/react';
import Logo from '../assets/daily-tasks.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

interface Props {
	errorText: string,
	messageRedirect: string,
	pageRedirect: string,
	test: boolean,
}

export const NotFoundPage = ({
	errorText,
	messageRedirect,
	pageRedirect,
	test = false,
}: Props ) => {
	const navigate = useNavigate();
	const reDirectTo = () => {
		navigate('/', { replace: true });
	};

	return (
		<Container centerContent>
			<Center padding='4' w='100vw' h='100vh'>
				<Box
					w='80%'
					h='80%'
					display='flex'
					flexDir='column'
					alignItems='center'
					justifyContent='center'
				>
					<Box>
						<Image src={Logo} alt='Logo_Task' boxSize='150px' />
					</Box>
					<Heading as='h2' size='2xl' fontWeight='bold' textAlign='center'>
						{errorText}
						<Text
							bgGradient={test ? '' : 'linear(to-l, #7928ca, #0084ff)'}
							bgClip='text'
							fontSize='3xl'
							fontWeight='bold'
							pb='30px'
							pt='20px'
						>
							{messageRedirect}
						</Text>
					</Heading>
					<Box>
						<Button
							rightIcon={<ArrowForwardIcon />}
							colorScheme='blue'
							size='lg'
							onClick={reDirectTo}
						>
							{pageRedirect}
						</Button>
					</Box>
				</Box>
			</Center>
		</Container>
	);
};

NotFoundPage.propTypes = {
	errorText: PropTypes.string.isRequired,
	messageRedirect: PropTypes.string.isRequired,
	pageRedirect: PropTypes.string.isRequired,
	test: PropTypes.bool,
};
