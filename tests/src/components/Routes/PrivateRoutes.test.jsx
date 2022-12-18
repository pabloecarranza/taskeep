import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { PrivateRoutes } from './../../../../src/components/Routes/PrivateRoutes';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Navigate } from 'react-router-dom';

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
		render(<PrivateRoutes />);
	});
});
