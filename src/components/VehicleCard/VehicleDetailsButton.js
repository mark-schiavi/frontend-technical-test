import ModalPopup from '../modals/VehicleDetailsModal/ModalPopup';
import useVehicleDetailsButton from '../../hooks/useVehicleDetailsButton';
import VehicleDetailsModal from '../modals/VehicleDetailsModal/VehicleDetailsModal';

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
        <ModalPopup
          open={open}
          onClose={handleClose}
          id={`modal-popup-${vehicle.id}`}
        >
          <VehicleDetailsModal />
        </ModalPopup>
      )}
    </p>
  );
}
