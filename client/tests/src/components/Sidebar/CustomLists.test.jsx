import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { CustomLists } from './../../../../src/components/Sidebar/CustomLists';
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
	const isloaded = true;
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
		renderWithProviders(
			<Router>
				<CustomLists data={data} isloaded={isloaded} test={true} />
			</Router>
		);
	});
	screen.debug();
});
