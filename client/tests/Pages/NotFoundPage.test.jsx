import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi, expect, describe, it, test } from 'vitest';
import { NotFoundPage } from './../../src/Pages/NotFoundPage';

describe('Test suite on NotFoundPage component', () => {
	const NotFoundPageDates = {
		error_text: "We're",
		message_redirect: 'Our team',
		page_redirect: 'Page',
	};

	it('must show the error text app send by props', () => {
		const { getByText } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(getByText(NotFoundPageDates.error_text)).toBeTruthy();
	});

	test('must show the redirect message send by props', () => {
		const { getByText } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(getByText(NotFoundPageDates.message_redirect));
	});

	test('must show the name of page to redirect  send by props', () => {
		const { getByText } = render(
			<Router>
				<NotFoundPage {...NotFoundPageDates} />
			</Router>
		);
		expect(getByText(NotFoundPageDates.page_redirect));
	});
});
