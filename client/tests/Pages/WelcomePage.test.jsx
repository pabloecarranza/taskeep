import { render, screen } from '@testing-library/react';
import { vi, expect, describe, it } from 'vitest';
import { WelcomePage } from '../../src/Pages/WelcomePage';

describe('Test suite on WelcomePage component', () => {
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
				return <div />;
			},
			LoginForm: () => {
				return <div />;
			},
		};
	});

	it('must match with the snapshot', () => {
		const { container } = render(<WelcomePage {...WelcomePagesDates} />);
		expect(container).toMatchSnapshot();
	});

	it('must show the name app send by props', () => {
		const { getByText, getByTestId } = render(
			<WelcomePage {...WelcomePagesDates} />
		);
		expect(getByText(WelcomePagesDates.app_name)).toBeTruthy();

		expect(getByTestId('app_name').innerHTML).toBe(WelcomePagesDates.app_name);
	});

	it('must show text of subtitle send by props', () => {
		const { getByText } = render(<WelcomePage {...WelcomePagesDates} />);

		expect(getByText(WelcomePagesDates.subtitle)).toBeTruthy();
	});

	it('must show the typewriter send by props', () => {
		const { getByText, getByTestId } = render(
			<WelcomePage {...WelcomePagesDates} />
		);
		expect(getByTestId('typewriter-wrapper')).toBeTruthy();
	});

	it('must show the name of repository send by props', () => {
		const { getByText } = render(<WelcomePage {...WelcomePagesDates} />);
		expect(getByText(WelcomePagesDates.repository));
	});

	it('must show text get starter send by props', () => {
		const { getByText } = render(<WelcomePage {...WelcomePagesDates} />);
		expect(getByText(WelcomePagesDates.start_app));
	});

	it('must show the text (made by) send by props', () => {
		const { getByText } = render(<WelcomePage {...WelcomePagesDates} />);
		expect(getByText(WelcomePagesDates.made));
	});

	it('should display Get Starter button', () => {
		render(<WelcomePage {...WelcomePagesDates} />);

		const button = screen.getByText(WelcomePagesDates.start_app);
		expect(button.textContent).toEqual(WelcomePagesDates.start_app);
	});

	it('should display Repository button', () => {
		render(<WelcomePage {...WelcomePagesDates} />);

		const button = screen.getByText(WelcomePagesDates.repository);
		expect(button.textContent).toEqual(WelcomePagesDates.repository);
	});
});
