import React from 'react';
import { CgClose } from 'react-icons/cg';
import { Button, Center, useDisclosure } from '@chakra-ui/react';

import { ModalConfirm } from '../Modals/ModalConfirm';
import { Link } from 'react-router-dom';

export const Lists = ({ data, isloaded }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [seleted, setSeleted] = React.useState({});

	function capitalizeFirstLetter(str) {
		const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

		return capitalized;
	}

	function handleSelect(e) {
		setSeleted(e);
	}
	function handleDeleted(e) {
		onOpen();
	}

	return data.map(list => (
		<Center>
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
	));
};
