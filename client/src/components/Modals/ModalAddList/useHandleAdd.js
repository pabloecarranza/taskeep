import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { usePostListMutation } from '../../../features/api/listSlice';

const usehandleAdd = onClose => {
	const [input, setInput] = useState({ name: '' });
	const toast = useToast();
	const [PostList, PostListResponse] = usePostListMutation();
	const handleChange = value => {
		setInput({ name: value });
	};

	const handleSubmit = event => {
		if (event.key === 'Enter' || event.type === 'click') {
			if (input.name.length === 0) {
				console.log('no tiene nada');
				toast({
					title: 'Error.',
					description: 'The field list name cant by empty.',
					status: 'error',
					duration: 2000,
					isClosable: true,
				});
				return;
			} else {
				PostList(input)
					.unwrap()
					.then(respon => {
						toast({
							title: 'Success.',
							description: `${respon.message}`,
							status: 'success',
							duration: 3000,
							isClosable: true,
						});
						onClose();
					})
					.catch(error => {
						toast({
							title: 'Error',
							description: `${error.data.message}`,
							status: 'error',
							duration: 2000,
							isClosable: true,
						});
					});
				setInput({ name: '' });
			}
		}
	};

	return [input, handleChange, handleSubmit];
};

export default usehandleAdd;
