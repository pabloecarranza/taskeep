import React from 'react';
import { CgList, CgClose } from 'react-icons/cg';
import {
	Button,
	SkeletonText,
	Center,
	ButtonGroup,
	IconButton,
	useDisclosure,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
} from '@chakra-ui/react';
import { useDeleteListMutation } from '../../features/api/listSlice';
import { ModalConfirm } from '../Modals/ModalConfirm';

export const TaskLists = ({ data, isloaded }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	const [seleted, setSeleted] = React.useState({});

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

	function handleSelect(e) {
		setSeleted(e);
	}
	function handleDeleted(e) {
		console.log(seleted);
		onOpen();
	}

	return data.map(list => (
		<Center>
			{/* <CgList /> */}
			<ModalConfirm
				onOpen={onOpen}
				isOpen={isOpen}
				onClose={onClose}
				List={seleted}
				setSeleted={setSeleted}
			/>
			<Button
				variant='white'
				_hover={{ bg: '#44444442', color: '#0084ff' }}
				justifyContent='space-between'
				key={list.name}
				name={list.id}
				w='100%'
				onClick={e => handleSelect(list)}
			>
				{capitalizeFirstLetter(list.name)}
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
	));
};
