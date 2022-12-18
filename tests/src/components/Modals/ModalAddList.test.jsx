import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
import { ModalAddList } from './../../../../src/components/Modals/ModalAddList';
import { ModalAddListDates } from './../../../../src/utils/EnglishTexts';
// eslint-disable-next-line no-unused-vars
import usehandleAdd from './../../../../src/Hooks/useHandleAdd';

vi.mock('../../../../src/Hooks/useHandleAdd');

describe('test suite on addListModal component', () => {
	const isOpen = true;
	const onClose = vi.fn();
	const newValue = 'testText';
	const input = { name: 'testText' };
	const handleChange = vi.fn();
	const handleSubmit = vi.fn();
	const handleClick = vi.fn();

	// eslint-disable-next-line no-import-assign
	usehandleAdd = vi
		.fn()
		.mockReturnValue([input, handleChange, handleSubmit, handleClick]);
	it('should set the new list name on input field', () => {
		renderWithProviders(
			<ModalAddList {...ModalAddListDates} isOpen={isOpen} onClose={onClose} />
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: newValue } });

		expect(input.value).toEqual(newValue);
	});

	it('should call handleOnsubmit when click on save', () => {
		renderWithProviders(
			<ModalAddList {...ModalAddListDates} isOpen={isOpen} onClose={onClose} />
		);

		const saveButton = screen.getByText(ModalAddListDates.buttonTwo);
		fireEvent.click(saveButton);

		expect(handleSubmit).toHaveBeenCalled();
	});

	it('should call handleOnsubmit when click on cancel', () => {
		renderWithProviders(
			<ModalAddList {...ModalAddListDates} isOpen={isOpen} onClose={onClose} />
		);

		const cancelButton = screen.getByText(ModalAddListDates.buttonOne);
		fireEvent.click(cancelButton);

		expect(onClose).toHaveBeenCalled();
	});

	it('should call handleSubmit on keydown of button save', () => {
		const { getByText } = renderWithProviders(
			<ModalAddList {...ModalAddListDates} isOpen={isOpen} onClose={onClose} />
		);

		const saveButton = getByText(ModalAddListDates.buttonTwo);
		fireEvent.keyDown(saveButton, {
			key: 'Enter',
			code: 13,
		});

		expect(handleSubmit).toHaveBeenCalled();
	});
});
