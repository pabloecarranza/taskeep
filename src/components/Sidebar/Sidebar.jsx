import { Box, Divider, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useGetListsQuery } from '../../features/api/listSlice';
import { ModalWelcome } from './../Modals/ModalWelcome';
import { ModalAddList } from '../Modals/ModalAddList';
import { useNavigate } from 'react-router-dom';
import {
	FiltersListsDates,
	ModalAddListDates,
	ModalWelcomeDates,
} from '../../utils/EnglishTexts';
import { LoggedUser } from './LoggedUser';
import { FiltersLists } from './FiltersLists';
import { CustomLists } from './CustomLists';
import { useDispatch, useSelector } from 'react-redux';
import { sessionIn, sessionOut } from '../../features/api/sessionSlice';

export const Sidebar = () => {
	const {
		isOpen: isOpenWelcomeModal,
		onOpen: onOpenWelcomeModal,
		onClose: onCloseWelcomeModal,
	} = useDisclosure();

	const {
		isOpen: isOpenAddListModal,
		onOpen: onOpenAddListModal,
		onClose: onCloseAddListModal,
	} = useDisclosure();

	const [isloaded, setIsloaded] = React.useState(false);
	const { data = [] } = useGetListsQuery();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.session);
	const userData = JSON.parse(localStorage.getItem('identified-user'));
	const userCheck = () => {
		if (!userData) {
			dispatch(sessionOut());
			navigate('/');
			return;
		}
		dispatch(sessionIn(userData));
	};

	useEffect(() => {
		userCheck();
	}, []);
	useEffect(() => {
		onOpenWelcomeModal();

		navigate('/homepage/myday');
	}, []);

	return (
		<Box
			w='20%'
			p={4}
			bg='brand.700'
			color='white'
			borderRadius='20px'
			h='98vh'
		>
			<ModalWelcome
				isOpen={isOpenWelcomeModal}
				onClose={onCloseWelcomeModal}
				setIsloaded={setIsloaded}
				{...ModalWelcomeDates}
			/>
			<ModalAddList
				isOpen={isOpenAddListModal}
				onClose={onCloseAddListModal}
				{...ModalAddListDates}
			/>

			<LoggedUser
				userdata={userData?.length ? userData : currentUser}
				isloaded={isloaded}
			/>
			<FiltersLists
				isloaded={isloaded}
				onOpenAddListModal={onOpenAddListModal}
				{...FiltersListsDates}
			/>
			<Divider />
			<CustomLists data={data} isloaded={isloaded} />
		</Box>
	);
};
