import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DrawerTask } from './../../../../src/components/DrawerTask/DrawerTask';
import { renderWithProviders } from './../../../../src/utils/utils-for-test';

describe('Test suite on DrawerTask component', () => {
	const isOpen = true;

	it('should ', () => {
		//{ onOpen, onClose, isOpen }
		const container = renderWithProviders(
			<DrawerTask onClose={() => {}} isOpen={isOpen} onOpen={() => {}} />
		);
	});
});
