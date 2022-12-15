import { describe, it } from 'vitest';
import { Lists } from '../../../../src/components/Sidebar/Lists';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Name of the group', () => {
	const list = {
		createdAt: '2022-12-06T20:09:57.949Z',
		id: 133,
		name: 'prueba1',
		updatedAt: '2022-12-06T20:09:57.948Z',
	};

	it('should ', () => {
		renderWithProviders(
			<Router>
				<Lists list={list} test={true} />
			</Router>
		);
	});
});
