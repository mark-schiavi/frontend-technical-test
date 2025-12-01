import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleImage from '../VehicleImage';
import { mockVehicle } from '../../../__mocks__/vehicleMock';

describe('<VehicleImage /> Tests', () => {
  it('Should render picture element', () => {
    const { container } = render(<VehicleImage vehicle={mockVehicle} />);
    expect(container.querySelector('picture')).not.toBeNull();
  });

  it('Should render img element with correct src', () => {
    render(<VehicleImage vehicle={mockVehicle} />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe('/images/16x9/fpace_k17.jpg');
  });

  it('Should have descriptive alt text', () => {
    render(<VehicleImage vehicle={mockVehicle} />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('alt')).toBe('fpace Jaguar');
  });

  it('Should render source element for mobile image', () => {
    const { container } = render(<VehicleImage vehicle={mockVehicle} />);
    const source = container.querySelector('source');
    expect(source).not.toBeNull();
    expect(source.getAttribute('media')).toBe('(max-width: 767px)');
    expect(source.getAttribute('srcset')).toBe('/images/1x1/fpace_k17.jpg');
  });

  it('Should apply correct CSS class to wrapper', () => {
    const { container } = render(<VehicleImage vehicle={mockVehicle} />);
    expect(
      container.querySelector('.vehicle-card__img-wrapper')
    ).not.toBeNull();
  });

  it('Should apply correct CSS class to img', () => {
    const { container } = render(<VehicleImage vehicle={mockVehicle} />);
    expect(container.querySelector('.vehicle-card__img')).not.toBeNull();
  });
});
