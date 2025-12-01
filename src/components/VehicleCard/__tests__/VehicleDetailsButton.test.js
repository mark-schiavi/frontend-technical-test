import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import VehicleDetailsButton from '../VehicleDetailsButton';
import '../../../__mocks__/dialogMock';
import { mockVehicle } from '../../../__mocks__/vehicleMock';

describe('VehicleDetailsButton', () => {
  it('renders the button', () => {
    render(
      <Provider store={store}>
        <VehicleDetailsButton vehicle={mockVehicle} />
      </Provider>
    );
    expect(screen.getByRole('button', { name: /read more/i })).toBeTruthy();
  });

  it('opens modal when button is clicked', () => {
    render(
      <Provider store={store}>
        <VehicleDetailsButton vehicle={mockVehicle} />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /read more/i }));

    const dialog = document.querySelector('.vehicle-details-modal');
    expect(dialog).toBeTruthy();
    expect(screen.getByText(/Jaguar/i)).toBeTruthy();
  });

  it('closes modal when close button is clicked', () => {
    render(
      <Provider store={store}>
        <VehicleDetailsButton vehicle={mockVehicle} />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /read more/i }));
    fireEvent.click(screen.getByLabelText(/close modal/i));
    const dialog = document.querySelector('.vehicle-details-modal');
    expect(dialog).toBeFalsy();
  });
});
