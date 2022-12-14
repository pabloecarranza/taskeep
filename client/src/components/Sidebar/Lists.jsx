import { Button, Center, useDisclosure, Flex } from '@chakra-ui/react';
import { ModalConfirm } from '../Modals/ModalConfirm';
import { Link } from 'react-router-dom';
import { ModalConfirmDates } from '../../utils/EnglishTexts';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import PropTypes from 'prop-types';
export const Lists = ({ list, test }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
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

	const [seleted, setSeleted] = useState({});

	return (
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
				{test ? (
					<Flex
						justifyContent='center'
						key={list.id}
						variant='gray'
						name={list.name}
						_hover={{ color: '#ff4000' }}
						onClick={() => handleDeleted(list.id)}
					/>
				) : (
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
				)}
			</Button>
		</Center>
	);
};

Lists.propTypes = {
	list: PropTypes.object,
	test: PropTypes.bool,
};
