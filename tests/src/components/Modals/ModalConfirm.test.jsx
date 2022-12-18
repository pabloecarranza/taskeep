import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { ModalConfirmDates } from '../../../../src/utils/EnglishTexts';
import { ModalConfirm } from './../../../../src/components/Modals/ModalConfirm';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import useDeleteList from './../../../../src/Hooks/useDeleteList';

vi.mock('../../../../src/Hooks/useDeleteList');

describe('Name of the group', () => {
	const isOpen = true;
	const onClose = vi.fn();
	const onOpen = vi.fn();
	const List = {
		createdAt: '2022-12-02T14:58:15.257Z',
		id: 137,
		name: 'food ',
		updatedAt: '2022-12-02T14:58:15.257Z',
	};
	const setSeleted = vi.fn();
	const deleteList = vi.fn();

	// eslint-disable-next-line no-import-assign
	useDeleteList = vi.fn().mockReturnValue([deleteList]);

	it('must show all texts send by props ', () => {
		renderWithProviders(
			<Router>
				<ModalConfirm
					{...ModalConfirmDates}
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
					List={List}
					setSeleted={setSeleted}
				/>
			</Router>
		);
		const text = screen.getByRole('dialog');
		expect(text).toHaveTextContent(ModalConfirmDates.buttonOne);
		expect(text).toHaveTextContent(ModalConfirmDates.buttonTwo);
		expect(text).toHaveTextContent(ModalConfirmDates.message);
		expect(text).toHaveTextContent(ModalConfirmDates.titlePartOne);
		expect(text).toHaveTextContent(ModalConfirmDates.titlePartTwo);
		expect(text).toHaveTextContent(List.name);
	});
	it('should call deleteList when confirm delete', () => {
		renderWithProviders(
			<Router>
				<ModalConfirm
					{...ModalConfirmDates}
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
					List={List}
					setSeleted={setSeleted}
				/>
			</Router>
		);

		const buttonDelete = screen.getByText(ModalConfirmDates.buttonTwo);

		fireEvent.click(buttonDelete);
		expect(deleteList).toHaveBeenCalled();
	});
});
