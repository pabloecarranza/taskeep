/*import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from './utils/test-utils';


describe('Name of the group', () => {
	it('should ', () => {});
});
 */
import { render, screen } from '@testing-library/react';
import { vi, expect } from 'vitest';
import { LoginForm } from '../../src/components/LoginForm';

import { WelcomePage } from './../../src/Pages/WelcomePage';

describe('Name of the group', () => {
	const WelcomePagesDates = {
		app_name: 'TASKEEP',
		slogan_one: 'The most powerful',
		slogan_two: 'The real powerful',
		subtitle: 'Task Management App',
		repository: 'Github',
		start_app: 'Get Starter',
		made: 'Made by Pablo Carranza',
		test: true,
	};

	vi.mock('../../src/components/LoginForm', () => {
		return {
			__esModule: true,
			default: () => {
				// if you exporting component as default
				return <div />;
			},
			LoginForm: () => {
				// if you exporting component as not default
				return <div />;
			},
		};
	});

	test('dd', () => {
		const result = render(<WelcomePage {...WelcomePagesDates} />);
		expect(result).toMatchSnapshot();
	});
});
