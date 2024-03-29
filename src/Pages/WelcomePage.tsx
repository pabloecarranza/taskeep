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
} from '@chakra-ui/react';
import { VscGithubInverted } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import Logo from '../assets/daily-tasks.png';
import Typewriter from 'typewriter-effect';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import bg from '../assets/BG7.jpg';
import { LoginMain } from '../components/LoginForm/LoginMain';
import { useEffect } from 'react';
import { getItem } from './../utils/LocalStorage';

interface Props {
	appName: string,
	sloganOne: string,
	sloganTwo: string,
	subtitle: string,
	repository: string,
	startApp: string,
	made: string,
	test: boolean,
}

export const WelcomePage = ({
	appName,
	sloganOne,
	sloganTwo,
	subtitle,
	repository,
	startApp,
	made,
	test = false,
}: Props ) => {
	const { isOpen, onToggle } = useDisclosure();
	const currentUser = getItem('identified-user')

	useEffect(() => {
		if (!currentUser === null) onToggle();
	}, []);

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
						bgGradient={test ? '' : 'linear(to-l, #b785e9, #61acf3)'}
						bgClip='text'
						fontSize='6xl'
						fontWeight='extrabold'
						pb='10px'
						data-testid='appName'
					>
						{appName}
					</Text>
					<Heading as='h2' size='2xl' noOfLines={0} fontWeight='bold'>
						<Typewriter
							options={{
								strings: [`${sloganOne}`, `${sloganTwo}`],
								autoStart: true,
								loop: true,
							}}
						/>

						<Text
							bgGradient={test ? '' : 'linear(to-l, #7928ca, #0084ff)'}
							bgClip='text'
							fontSize='5xl'
							fontWeight='bold'
							pb='50px'
						>
							{subtitle}
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
							{repository}
						</Button>
						<Button
							rightIcon={<ArrowForwardIcon />}
							colorScheme='blue'
							variant='outline'
							size='lg'
							onClick={onToggle}
						>
							{startApp}
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
						{made}
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
				<ScaleFade initialScale={0.9} in={isOpen} unmountOnExit={!isOpen}>
					<LoginMain />
				</ScaleFade>
			</Center>
		</Flex>
	);
};