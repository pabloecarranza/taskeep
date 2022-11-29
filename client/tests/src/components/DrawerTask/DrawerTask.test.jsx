import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DrawerTask } from './../../../../src/components/DrawerTask/DrawerTask';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';

describe('Test suite on DrawerTask component', () => {
	const isOpen = true;
	vi.mock('../../../../src/components/DrawerTask/DrawerBodyTask', () => {
		return {
			__esModule: true,
			default: () => {
				return <DrawerBodyTask />;
			},
			DrawerBodyTask: () => {
				return <h1>DrawerBodyTask</h1>;
			},
		};
	});

	it('should ', () => {
		//{ onOpen, onClose, isOpen }
		renderWithProviders(
			<DrawerTask onClose={() => {}} isOpen={isOpen} onOpen={() => {}} />
		);
	});
});

/*

si se abre el editor de tarea debe setear la tarea elegida
debe mostrar el numero de la tarea a editar
al hacer click en el icono de trash debe llamar a deleteTask submit
al hacer click en cancel debe llamar a onclosed
al hacer click en save dene llamar a puttasksubmit


hay que mockear el componente DrawerBodyTask porque debe tener su propio unit testing

*/
