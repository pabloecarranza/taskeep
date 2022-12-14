import {
	Button,
	useDisclosure,
	SkeletonText,
	Flex,
	Spacer,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { ModalLogoutDates } from '../../utils/EnglishTexts';
import PropTypes from 'prop-types';
import { ModalLogout } from './../Modals/ModalLogout';
import { Lists } from './Lists';

export const CustomLists = ({ data, isloaded, test = false }) => {
	const {
		isOpen: isOpenModalLogout,
		onOpen: onOpenModalLogout,
		onClose: onCloseModalLogout,
	} = useDisclosure();

	function logOut() {
		onOpenModalLogout();
	}

	return (
		<Flex flexDir='column' h='50%'>
			<ModalLogout
				isOpen={isOpenModalLogout}
				onOpen={onOpenModalLogout}
				onClose={onCloseModalLogout}
				{...ModalLogoutDates}
			/>
			{data.map(list => (
				<Flex
					flexDirection='column'
					justifyContent='flex-start'
					w='100%'
					overflow='auto'
					key={list.id}
				>
					{test ? (
						<Lists list={list} />
					) : (
						<SkeletonText
							noOfLines={2}
							isLoaded={isloaded}
							fadeDuration={9}
							spacing='6'
						>
							<Lists list={list} />
						</SkeletonText>
					)}
				</Flex>
			))}
			<Spacer />
			<Flex justifyContent='flex-end'>
				<Button
					rightIcon={<FiLogOut />}
					variant='white'
					_hover={{ bg: '#44444442', color: '#0084ff' }}
					onClick={() => logOut()}
				>
					Logout
				</Button>
			</Flex>
		</Flex>
	);
};

CustomLists.propTypes = {
	data: PropTypes.array.isRequired,
	isloaded: PropTypes.bool.isRequired,
	test: PropTypes.bool,
};
