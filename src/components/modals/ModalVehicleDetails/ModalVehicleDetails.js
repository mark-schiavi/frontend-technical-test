import { useSelector } from 'react-redux';
import { selectVehicles } from '../../../store/vehiclesSlice';
import './ModalVehicleDetails.scss';

export default function ModalVehicleDetails() {
  const vehicle = useSelector(selectVehicles).selectedVehicle;
  return (
    <>
      <h2 id="modal-popup-title" className="modal-vehicle-details__title">
        {vehicle.id.toUpperCase()}
      </h2>

      <div className="modal-vehicle-details__content">
        <p className="modal-vehicle-details__description">
          {vehicle.description}
        </p>

        <div className="modal-vehicle-details__details">
          <div className="modal-vehicle-details__detail">
            <span className="modal-vehicle-details__label">
              Price:
            </span>
            <span className="modal-vehicle-details__value">
              {vehicle.price}
            </span>
          </div>

          {vehicle.meta && vehicle.meta.passengers && (
            <div className="modal-vehicle-details__detail">
              <span className="modal-vehicle-details__label">
                Passengers:
              </span>
              <span className="modal-vehicle-details__value">
                {vehicle.meta.passengers}
              </span>
            </div>
          )}

          {vehicle.meta && vehicle.meta.bodystyles && (
            <div className="modal-vehicle-details__detail">
              <span className="modal-vehicle-details__label">
                Body Style:
              </span>
              <span className="modal-vehicle-details__value">
                {vehicle.meta.bodystyles.join(', ')}
              </span>
            </div>
          )}

          {vehicle.meta && vehicle.meta.drivetrain && (
            <div className="modal-vehicle-details__detail">
              <span className="modal-vehicle-details__label">
                Drivetrain:
              </span>
              <span className="modal-vehicle-details__value">
                {vehicle.meta.drivetrain.join(', ')}
              </span>
            </div>
          )}

          {vehicle.meta && vehicle.meta.emissions && (
            <div className="modal-vehicle-details__detail">
              <span className="modal-vehicle-details__label">
                Emissions:
              </span>
              <span className="modal-vehicle-details__value">
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
