import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expect, describe, it } from 'vitest';
import { NotFoundPage } from './../../../src/Pages/NotFoundPage';

describe('Test suite on NotFoundPage component', () => {
	const NotFoundPageDates = {
		errorText: "We're",
		messageRedirect: 'Our team',
		pageRedirect: 'Page',
		test: true,
	};

	it('must show the error text app send by props', () => {
		const { getByText } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(getByText(NotFoundPageDates.errorText)).toBeTruthy();
	});

	it('must show the redirect message send by props', () => {
		const { getByText } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(getByText(NotFoundPageDates.messageRedirect));
	});

	it('must show the name of page to redirect  send by props', () => {
		const { getByText } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(getByText(NotFoundPageDates.pageRedirect));
	});

	it('must match vith the snapshot', () => {
		const { container } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(container).toMatchSnapshot();
	});

	it('should display reDirect button', () => {
		render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);

		const button = screen.getByText(NotFoundPageDates.pageRedirect);
		expect(button.textContent).toEqual(NotFoundPageDates.pageRedirect);
	});
});
