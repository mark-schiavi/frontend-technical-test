import React from 'react';
import { createPortal } from 'react-dom';
import useVehicleDetailsModal from '../../../hooks/useVehicleDetailsModal';
import './style.scss';

export default function VehicleDetailsModal({ open, onClose, vehicle }) {
  const { dialogRef } = useVehicleDetailsModal(open, onClose);

  if (!open || !vehicle) return null;

  return createPortal(
    <>
      <div className="vehicle-details-modal__overlay" />
      <dialog
        ref={dialogRef}
        aria-modal="true"
        aria-labelledby="vehicle-details-modal-title"
        className="vehicle-details-modal"
        tabIndex={-1}
        onCancel={onClose}
      >
        <button
          className="vehicle-details-modal__close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          ×
        </button>

        <h2 id="modal-title" className="vehicle-details-modal__title">
          {vehicle.id.toUpperCase()}
        </h2>

        <div className="vehicle-details-modal__content">
          <p className="vehicle-details-modal__description">
            {vehicle.description}
          </p>

          <div className="vehicle-details-modal__details">
            <div className="vehicle-details-modal__detail">
              <span className="vehicle-details-modal__label">
                Price:
              </span>
              <span className="vehicle-details-modal__value">
                {vehicle.price}
              </span>
            </div>

            {vehicle.meta && vehicle.meta.passengers && (
            <div className="vehicle-details-modal__detail">
              <span className="vehicle-details-modal__label">
                Passengers:
              </span>
              <span className="vehicle-details-modal__value">
                {vehicle.meta.passengers}
              </span>
            </div>
            )}

            {vehicle.meta && vehicle.meta.bodystyles && (
            <div className="vehicle-details-modal__detail">
              <span className="vehicle-details-modal__label">
                Body Style:
              </span>
              <span className="vehicle-details-modal__value">
                {vehicle.meta.bodystyles.join(', ')}
              </span>
            </div>
            )}

            {vehicle.meta && vehicle.meta.drivetrain && (
            <div className="vehicle-details-modal__detail">
              <span className="vehicle-details-modal__label">
                Drivetrain:
              </span>
              <span className="vehicle-details-modal__value">
                {vehicle.meta.drivetrain.join(', ')}
              </span>
            </div>
            )}

            {vehicle.meta && vehicle.meta.emissions && (
            <div className="vehicle-details-modal__detail">
              <span className="vehicle-details-modal__label">
                Emissions:
              </span>
              <span className="vehicle-details-modal__value">
                {vehicle.meta.emissions.template.replace(
                  '$value',
                  vehicle.meta.emissions.value
                )}
              </span>
            </div>
            )}
          </div>
        </div>
      </dialog>
    </>,
    document.body
  );
}
