import { describe, it, vi } from 'vitest';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom';
import { SkeletonText } from '@chakra-ui/react';

vi.mock('@chakra-ui/react/SkeletonText', () => {
	return {
		__esModule: true,
		default: () => {
			return <SkeletonText />;
		},
		SkeletonText: () => {
			return <span />;
		},
	};
});

describe('first', () => {
	// eslint-disable-next-line no-unused-vars
	const isloaded = true;
	// eslint-disable-next-line no-unused-vars
	const data = [
		{
			createdAt: '2022-12-06T20:09:57.949Z',
			id: 133,
			name: 'prueba1',
			updatedAt: '2022-12-06T20:09:57.948Z',
		},
		{
			createdAt: '2022-12-06T20:09:57.942Z',
			id: 138,
			name: 'prueba2',
			updatedAt: '2022-12-06T20:09:57.941Z',
		},
		{
			createdAt: '2022-12-06T20:09:57.943Z',
			id: 135,
			name: 'prueba3',
			updatedAt: '2022-12-06T20:09:57.944Z',
		},
	];

	it('should ', () => {
		// eslint-disable-next-line spaced-comment
		/*	renderWithProviders(
			<Router>
				<CustomLists data={data} isloaded={isloaded} test={true} />
			</Router>
		);*/
	});
});
