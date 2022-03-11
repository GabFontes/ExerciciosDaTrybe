import renderWithRedux from "./Helpers/RenderWithRedux";
import React from "react";
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testes react-wtih-redux', () => {
	it('Testa o semaforo', () => {
		const { getByAltText, getByRole } = renderWithRedux(<App />);

		const semaforo = getByAltText(/Semáforo/i);
		expect(semaforo).toBeDefined();
		expect(semaforo.src).toBe('http://localhost/redSignal.jpeg');

		const YellowButton = getByRole('button', { name: /Yellow/i });
		expect(YellowButton).toBeDefined();

		userEvent.click(YellowButton);
		expect(semaforo.src).toBe('http://localhost/yellowSignal.jpeg');
	})

	it('Testa os carros', () => {
		const { getByAltText } = renderWithRedux(<App />);

		const redCar = getByAltText(/red car/i);
		expect(redCar).toBeDefined();
	});

});
