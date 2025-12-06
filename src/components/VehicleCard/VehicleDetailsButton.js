import ModalPopup from '../modals/ModalPopup/ModalPopup';
import useVehicleDetailsButton from '../../hooks/useVehicleDetailsButton';
import ModalVehicleDetails from '../modals/ModalVehicleDetails/ModalVehicleDetails';

export default function VehicleDetailsButton({ vehicle }) {
  const { open, handleOpen, handleClose } = useVehicleDetailsButton(vehicle);

  return (
    <p>
      <a
        href="#!"
        role="button"
        className="vehicle-card__show-details"
        aria-haspopup="dialog"
        aria-controls={`vehicle-modal-${vehicle.id}`}
        aria-expanded={open}
        onClick={handleOpen}
      >
        Read more &gt;
      </a>
      {open && (
        <ModalPopup
          open={open}
          onClose={handleClose}
          id={`modal-popup-${vehicle.id}`}
        >
          <ModalVehicleDetails />
        </ModalPopup>
      )}
    </p>
  );
}
