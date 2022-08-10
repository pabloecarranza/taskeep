import {
	Heading,
	Container,
	Box,
	Center,
	Button,
	Text,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { VscGithubInverted } from 'react-icons/all';

export const WelcomePage = () => {
	return (
		<Container centerContent>
			<Center padding="4" w="100vw" h="100vh">
				<Box
					w="80%"
					h="80%"
					display="flex"
					flexDir="column"
					alignItems="center"
					justifyContent="center"
				>
					<Text
						bgGradient="linear(to-l, #b785e9, #61acf3)"
						bgClip="text"
						fontSize="6xl"
						fontWeight="extrabold"
						pb="10px"
					>
						TASKEEP
					</Text>
					<Heading
						as="h2"
						size="3xl"
						noOflines={1}
						fontWeight="bold"
						textAlign="center"
					>
						The most powerful{' '}
						<Text
							bgGradient="linear(to-l, #7928ca, #0084ff)"
							bgClip="text"
							fontSize="6xl"
							fontWeight="bold"
							pb="90px"
						>
							Task Management App
						</Text>
					</Heading>
					<Box>
						<Button
							rightIcon={<ArrowForwardIcon />}
							colorScheme="blue"
							variant="outline"
							size="lg"
							mr="10px"
						>
							Get Started
						</Button>
						<Button
							size="lg"
							colorScheme="blue"
							rightIcon={<VscGithubInverted />}
						>
							GitHub
						</Button>
					</Box>
				</Box>
			</Center>
		</Container>
	);
};
