import React from 'react';
import VehicleDetailsModal from '../modals/VehicleDetailsModal';
import useVehicleDetailsButton from '../../hooks/useVehicleDetailsButton';

export default function VehicleDetailsButton({ vehicle }) {
  const { open, handleOpen, handleClose } = useVehicleDetailsButton(vehicle);

  return (
    <p>
      <button
        type="button"
        className="vehicle-card__show-details"
        aria-haspopup="dialog"
        aria-controls={`vehicle-modal-${vehicle.id}`}
        aria-expanded={open}
        onClick={handleOpen}
      >
        Read more &gt;
      </button>
      {open && (
        <VehicleDetailsModal
          vehicle={vehicle}
          open={open}
          onClose={handleClose}
          id={`vehicle-modal-${vehicle.id}`}
        />
      )}
    </p>
  );
}
