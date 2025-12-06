import { useSelector } from 'react-redux';
import { selectVehicles } from '../../../store/vehiclesSlice';
import './VehicleDetailsModal.scss';

export default function VehicleDetailsModal() {
  const vehicle = useSelector(selectVehicles).selectedVehicle;
  return (
    <>
      <h2 id="modal-popup-title" className="vehicle-details-modal__title">
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
    </>
  );
}
