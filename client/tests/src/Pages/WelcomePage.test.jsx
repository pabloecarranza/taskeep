import { render, screen } from '@testing-library/react';
import { vi, expect, describe, it } from 'vitest';

import { BrowserRouter as Router } from 'react-router-dom';

import { WelcomePage } from './../../../src/Pages/WelcomePage';
import { renderWithProviders } from './../../../src/utils/utils-for-test';

describe('Test suite on WelcomePage component', () => {
	const WelcomePagesDates = {
		appName: 'TASKEEP',
		sloganOne: 'The most powerful',
		sloganTwo: 'The real powerful',
		subtitle: 'Task Management App',
		repository: 'Github',
		startApp: 'Get Starter',
		made: 'Made by Pablo Carranza',
		test: true,
	};

	vi.mock('../../src/components/LoginForm', () => {
		return {
			__esModule: true,
			default: () => {
				return <div />;
			},
			LoginForm: () => {
				return <div />;
			},
		};
	});

	it('must match with the snapshot', () => {
		const { container } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);
		expect(container).toMatchSnapshot();
	});

	it('must show the name app send by props', () => {
		const { getByText, getByTestId } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);
		expect(getByText(WelcomePagesDates.appName)).toBeTruthy();

		expect(getByTestId('appName').innerHTML).toBe(WelcomePagesDates.appName);
	});

	it('must show text of subtitle send by props', () => {
		const { getByText } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);

		expect(getByText(WelcomePagesDates.subtitle)).toBeTruthy();
	});

	it('must show the typewriter send by props', () => {
		const { getByText, getByTestId } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);
		expect(getByTestId('typewriter-wrapper')).toBeTruthy();
	});

	it('must show the name of repository send by props', () => {
		const { getByText } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);
		expect(getByText(WelcomePagesDates.repository));
	});

	it('must show text get starter send by props', () => {
		const { getByText } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);
		expect(getByText(WelcomePagesDates.startApp));
	});

	it('must show the text (made by) send by props', () => {
		const { getByText } = renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);
		expect(getByText(WelcomePagesDates.made));
	});

	it('should display Get Starter button', () => {
		renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);

		const button = screen.getByText(WelcomePagesDates.startApp);
		expect(button.textContent).toEqual(WelcomePagesDates.startApp);
	});

	it('should display Repository button', () => {
		renderWithProviders(
			<Router>
				<WelcomePage {...WelcomePagesDates} />
			</Router>
		);

		const button = screen.getByText(WelcomePagesDates.repository);
		expect(button.textContent).toEqual(WelcomePagesDates.repository);
	});
});
