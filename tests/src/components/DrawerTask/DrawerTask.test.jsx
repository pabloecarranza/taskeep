import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DrawerTask } from './../../../../src/components/DrawerTask/DrawerTask';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';
// eslint-disable-next-line no-unused-vars
import { useDrawerTask } from './../../../../src/Hooks/useDrawerTask';

vi.mock('../../../../src/components/DrawerTask/DrawerBodyTask', () => {
	return {
		__esModule: true,
		default: () => {
			// eslint-disable-next-line react/jsx-no-undef
			return <DrawerBodyTask />;
		},
		DrawerBodyTask: () => {
			return <h1>DrawerBodyTask</h1>;
		},
	};
});

vi.mock('../../../../src/Hooks/useDrawerTask');

describe('Test suite on DrawerTask component', () => {
	const isOpen = true;
	const task = {
		id: 564,
	};
	const deleteTaskSubmit = vi.fn();
	const PutTaskSubmit = vi.fn();
	const onClosed = vi.fn();

	it('debe mostrar el numero de la tarea a editar', () => {
		// eslint-disable-next-line no-import-assign
		useDrawerTask = vi.fn().mockReturnValue({
			data: [],
			onClosed,
			task,
			setTask: vi.fn(),
			handleOnChange: vi.fn(),
			deleteTaskSubmit,
			PutTaskSubmit,
			capitalizeFirstLetter: vi.fn(),
			getCurrentTask: vi.fn(),
		});

		const { getByRole } = renderWithProviders(
			<DrawerTask onClose={() => {}} isOpen={isOpen} onOpen={() => {}} />
		);

		const header = getByRole('banner');
		expect(header.textContent).toContain(task.id);
	});
	it(' al hacer click en cancel debe llamar a onclosed', () => {
		renderWithProviders(
			<DrawerTask onClose={() => {}} isOpen={isOpen} onOpen={() => {}} />
		);

		const cancelButton = screen.getByText('Cancel');
		fireEvent.click(cancelButton);
		expect(onClosed).toHaveBeenCalled();
	});

	it('al hacer click en el icono de trash debe llamar a deleteTask submit ', () => {
		renderWithProviders(
			<DrawerTask onClose={() => {}} isOpen={isOpen} onOpen={() => {}} />
		);

		const trashButton = screen.getByTestId('trash');

		fireEvent.click(trashButton);
		expect(deleteTaskSubmit).toHaveBeenCalled();
	});

	it('al hacer click en save debe llamar a puttasksubmit', () => {
		renderWithProviders(
			<DrawerTask onClose={() => {}} isOpen={isOpen} onOpen={() => {}} />
		);

		const saveButton = screen.getByText('Save');
		fireEvent.click(saveButton);
		expect(PutTaskSubmit).toHaveBeenCalled();
	});
});
