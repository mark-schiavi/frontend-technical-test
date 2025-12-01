import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VehicleDetailsModal from '../index';
import '../../../../__mocks__/dialogMock';
import { mockVehicle } from '../../../../__mocks__/vehicleMock';

describe('VehicleDetailsModal', () => {
  it('renders modal when open is true', () => {
    render(
      <VehicleDetailsModal
        open
        onClose={() => {}}
        vehicle={mockVehicle}
      />
    );
    const dialog = document.querySelector('.vehicle-details-modal');
    expect(dialog).toBeTruthy();
    expect(screen.getByText(/Jaguar/i)).toBeTruthy();
    expect(screen.getByText(/Price:/i)).toBeTruthy();
    expect(screen.getByText(/Passengers:/i)).toBeTruthy();
    expect(screen.getByText(/Body Style:/i)).toBeTruthy();
    expect(screen.getByText(/Drivetrain:/i)).toBeTruthy();
    expect(screen.getByText(/CO2: 150 g\/km/i)).toBeTruthy();
  });

  it('does not render modal when open is false', () => {
    render(
      <VehicleDetailsModal
        open={false}
        onClose={() => {}}
        vehicle={mockVehicle}
      />
    );
    const dialog = document.querySelector('.vehicle-details-modal');
    expect(dialog).toBeFalsy();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <VehicleDetailsModal open onClose={onClose} vehicle={mockVehicle} />
    );
    fireEvent.click(screen.getByLabelText(/close modal/i));
    expect(onClose).toHaveBeenCalled();
  });
});
