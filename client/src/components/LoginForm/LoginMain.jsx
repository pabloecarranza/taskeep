import React from 'react';
import { Box, Center, Spinner } from '@chakra-ui/react';
import { useSpring } from 'react-spring';
import { useLoginUser } from '../../Hooks/useLoginUser';
import { LoginDone } from './LoginDone';
import {
	SignInSuccessfullyDates,
	SignUpSuccessfullyDates,
} from '../../utils/EnglishTexts';
import { SignUpForm } from './SignUpForm';
import { SignInForm } from './SignInForm';

export const LoginMain = () => {
	const {
		signUp,
		SignInResponse,
		SignUpResponse,
		navigate,
		handleClick,
		handleClickType,
		handleChange,
		handleInvited,
		handleSubmit,
		credentials,
		show,
	} = useLoginUser();

	const fadeSignUp = useSpring({
		opacity: signUp ? 1 : 0,
	});
	const fadeSignIn = useSpring({
		opacity: signUp ? 0 : 1,
	});

	return (
		<Box w='25rem' h='31rem' boxShadow='dark-lg' rounded='md' bg='#1A202C'>
			{SignInResponse.isSuccess ? (
				<LoginDone navigate={navigate} {...SignInSuccessfullyDates} />
			) : (
				<>
					{SignUpResponse.isSuccess ? (
						<LoginDone navigate={navigate} {...SignUpSuccessfullyDates} />
					) : (
						<>
							{SignInResponse.isLoading || SignUpResponse.isLoading ? (
								<Center pt='50%'>
									<Spinner size='xl' color='blue.500' />
								</Center>
							) : (
								<>
									{signUp ? (
										<SignUpForm
											fadeSignUp={fadeSignUp}
											handleClickType={handleClickType}
											credentials={credentials}
											show={show}
											handleSubmit={handleSubmit}
											handleChange={handleChange}
											handleClick={handleClick}
										/>
									) : (
										<SignInForm
											fadeSignIn={fadeSignIn}
											handleClickType={handleClickType}
											credentials={credentials}
											show={show}
											handleSubmit={handleSubmit}
											handleChange={handleChange}
											handleClick={handleClick}
											handleInvited={handleInvited}
										/>
									)}
								</>
							)}
						</>
					)}
				</>
			)}
		</Box>
	);
};
