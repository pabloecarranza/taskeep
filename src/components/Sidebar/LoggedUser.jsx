import {
	Box,
	Flex,
	Heading,
	Avatar,
	Text,
	Spacer,
	Button,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const LoggedUser = ({ userdata, isloaded }) => {
	const qd = 'q';
	console.log(qd);

	return (
		<Button w='100%' variant='white' mb='13px' cursor='default'>
			<Flex w='100%' alignItems='center' pb='15px'>
				<Box w='40%'>
					<SkeletonCircle size='12' isLoaded={isloaded} fadeDuration={1}>
						<Avatar size='md' name={userdata ? userdata.username : ''} />
					</SkeletonCircle>
				</Box>
				<Flex w='100%' textAlign='left'>
					<SkeletonText
						mt='2'
						noOfLines={2}
						isLoaded={isloaded}
						fadeDuration={2}
						spacing='2'
					>
						<Heading as='h5' size='xs'>
							{userdata ? userdata.username : ''}
						</Heading>

						<Spacer />
						<Text fontSize='xs'>{userdata ? userdata.email : ''}</Text>
					</SkeletonText>
				</Flex>
			</Flex>
		</Button>
	);
};

LoggedUser.propTypes = {
	userdata: PropTypes.object,
	isloaded: PropTypes.bool.isRequired,
};
