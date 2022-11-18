import React from 'react';
import { CgClose } from 'react-icons/cg';
import {
	Button,
	Center,
	useDisclosure,
	SkeletonText,
	Flex,
	Spacer,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { ModalConfirm } from '../Modals/ModalConfirm';
import { Link, useNavigate } from 'react-router-dom';
import { ModalConfirmDates, ModalLogoutDates } from '../../utils/EnglishTexts';
import PropTypes from 'prop-types';
import { ModalLogout } from './../Modals/ModalLogout';

export const CustomLists = ({ data, isloaded }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenModalLogout,
		onOpen: onOpenModalLogout,
		onClose: onCloseModalLogout,
	} = useDisclosure();
	const [seleted, setSeleted] = React.useState({});

	function capitalizeFirstLetter(nameList) {
		const capitalized = nameList.charAt(0).toUpperCase() + nameList.slice(1);
		return capitalized;
	}

	function handleSelect(e) {
		setSeleted(e);
	}
	function handleDeleted(e) {
		onOpen();
	}

	function logOut() {
		console.log('s');
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
					<SkeletonText
						noOfLines={3}
						isLoaded={isloaded}
						fadeDuration={9}
						spacing='6'
					>
						<Center>
							<ModalConfirm
								onOpen={onOpen}
								isOpen={isOpen}
								onClose={onClose}
								List={seleted}
								setSeleted={setSeleted}
								{...ModalConfirmDates}
							/>

							{/*  
					//TODO para quitar el warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>. 
					hay que reemplazar el componente botton (padre) por algun otro de chakra respetando el hover y el
					 estilo visual general para que pueda tener un button dentro...  👇👇
					*/}
							<Button
								variant='white'
								_hover={{ bg: '#44444442', color: '#0084ff' }}
								justifyContent='space-between'
								key={list.name}
								name={list.id}
								w='100%'
								onClick={e => handleSelect(list)}
							>
								<Link to={'tasklist/' + list.name}>
									{capitalizeFirstLetter(list.name)}
								</Link>
								<Button
									justifyContent='center'
									rightIcon={<CgClose />}
									key={list.id}
									variant='gray'
									name={list.name}
									colorScheme='whiteAlpha'
									_hover={{ color: '#ff4000' }}
									onClick={() => handleDeleted(list.id)}
								/>
							</Button>
						</Center>
					</SkeletonText>
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
};
