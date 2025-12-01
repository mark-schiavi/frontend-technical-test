import React from 'react';
import { useSelector } from 'react-redux';
import { selectVehicles } from '../../store/vehiclesSlice';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import './style.scss';

export default function VehicleList() {
  const { vehicles, loading, error } = useSelector(selectVehicles);

  useData();

  if (loading) {
    return (
      <div data-testid="loading" role="status" aria-live="polite">
        Loading vehicle information...
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="error" role="alert" aria-live="assertive">
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="vehicle-list" data-testid="results" role="list">
      {vehicles
                && vehicles.map((vehicle, index) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    index={index}
                  />
                ))}
    </div>
  );
}
