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
export const NotFoundPage = () => {
	let navigate = useNavigate();

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
						We&apos;re sorry - something&apos;s gone wrong.
						<Text
							bgGradient='linear(to-l, #7928ca, #0084ff)'
							bgClip='text'
							fontSize='3xl'
							fontWeight='bold'
							pb='30px'
							pt='20px'
						>
							Our team has been notified, but click below to go HomePage
						</Text>
					</Heading>
					<Box>
						<Button
							rightIcon={<ArrowForwardIcon />}
							colorScheme='blue'
							size='lg'
							onClick={() => navigate('/homepage', { replace: true })}
						>
							HomePage
						</Button>
					</Box>
				</Box>
			</Center>
		</Container>
	);
};
