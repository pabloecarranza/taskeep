import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { PrivateRoutes } from './../../../../src/components/Routes/PrivateRoutes';
import {
	BrowserRouter as Router,
	Navigate,
	MemoryRouter,
} from 'react-router-dom';

describe('Name of the group', () => {
	vi.mock('react-router-dom', () => {
		return {
			default: () => {
				return <Navigate />;
			},
			Navigate: () => {
				return <div />;
			},
		};
	});

	it('should ', async () => {
		/*Storage.prototype.getItem = {
			email: 'd@c.com',
			id: 'ed3ee58d-0bc2-4fbb-a80b-5c8032e968c1',
			logged: true,
			message: 'Login successfully',
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVkM2VlNThkLTBiYzItNGZiYi1hODBiLTVjODAzMmU5NjhjMSIsImlhdCI6MTY3MDMzODA1MSwiZXhwIjoxNjcwNDI0NDUxfQ.UuiGtdWh3BUl5uBVWoH5NQ8GsPjPbiXhcHvQP_Yf-KE',
			username: 'Invited',
		};*/

		render(<PrivateRoutes />);
	});
});
