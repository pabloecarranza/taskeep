import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { ModalConfirmDates } from '../../../../src/utils/EnglishTexts';
import { ModalConfirm } from './../../../../src/components/Modals/ModalConfirm';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { BrowserRouter as Router } from 'react-router-dom';
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
		expect(text).toHaveTextContent(ModalConfirmDates.button_one);
		expect(text).toHaveTextContent(ModalConfirmDates.button_two);
		expect(text).toHaveTextContent(ModalConfirmDates.message);
		expect(text).toHaveTextContent(ModalConfirmDates.title_partOne);
		expect(text).toHaveTextContent(ModalConfirmDates.title_partTwo);
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

		const buttonDelete = screen.getByText(ModalConfirmDates.button_two);

		fireEvent.click(buttonDelete);
		expect(deleteList).toHaveBeenCalled();
	});
});
