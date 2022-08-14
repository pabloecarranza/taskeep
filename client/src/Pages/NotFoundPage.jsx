import {
	Heading,
	Container,
	Box,
	Center,
	Button,
	Text,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

export const NotFoundPage = () => {
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
					<Heading
						as='h2'
						size='2xl'
						noOflines={1}
						fontWeight='bold'
						textAlign='center'
					>
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
						>
							HomePage
						</Button>
					</Box>
				</Box>
			</Center>
		</Container>
	);
};
