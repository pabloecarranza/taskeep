import {
	Box,
	Flex,
	Text,
	Heading,
	Button,
	Center,
	Image,
	useDisclosure,
	ScaleFade,
	Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { BsLinkedin, VscGithubInverted } from 'react-icons/all';
import Logo from '../assets/daily-tasks.png';
import Typewriter from 'typewriter-effect';
import { LoginForm } from '../components/LoginForm';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import bg from '../assets/hojas.png';

export const WelcomePage = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Flex
			w='100vw'
			h='100vh'
			flexDir={{ base: 'column', md: 'row', lg: 'row' }}
		>
			<Box w='100%' h='100%'>
				<Center
					w='100%'
					h='100%'
					flexDir='column'
					alignItems='flex-end'
					textAlign='right'
					pr='35px'
				>
					<Box>
						<Image src={Logo} alt='Logo_Task' boxSize='150px' />
					</Box>
					<Text
						bgGradient='linear(to-l, #b785e9, #61acf3)'
						bgClip='text'
						fontSize='6xl'
						fontWeight='extrabold'
						pb='10px'
					>
						TASKEEP
					</Text>
					<Heading as='h2' size='2xl' noOflines={1} fontWeight='bold'>
						<Typewriter
							options={{
								strings: ['The most powerful', 'The real powerful'],
								autoStart: true,
								loop: true,
							}}
						/>

						<Text
							bgGradient='linear(to-l, #7928ca, #0084ff)'
							bgClip='text'
							fontSize='5xl'
							fontWeight='bold'
							pb='50px'
						>
							Task Management App
						</Text>
					</Heading>
					<Box>
						<Button
							size='lg'
							colorScheme='blue'
							rightIcon={<VscGithubInverted />}
							mr='10px'
							onClick={() =>
								window.open(
									'https://github.com/pabloecarranza/taskeep',
									'_blank'
								)
							}
						>
							GitHub
						</Button>
						<Button
							rightIcon={<ArrowForwardIcon />}
							colorScheme='blue'
							variant='outline'
							size='lg'
							onClick={onToggle}
						>
							Get Started
						</Button>
					</Box>

					<Button
						colorScheme='gray'
						variant='link'
						rightIcon={<BsLinkedin />}
						pt='35px'
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/pabloecarranza/',
								'_blank'
							)
						}
					>
						Made by Pablo Carranza
					</Button>
				</Center>
			</Box>
			<Center
				w='80%'
				h='100%'
				backgroundImage={bg}
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				backgroundSize='cover'
			>
				<ScaleFade initialScale={0.9} in={isOpen}>
					<LoginForm />
				</ScaleFade>
			</Center>
		</Flex>
	);
};
