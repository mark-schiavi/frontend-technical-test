import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSelectedVehicle } from '../store/vehiclesSlice';

export default function useVehicleDetailsButton(vehicle) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    dispatch(setSelectedVehicle(vehicle));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
  };
}
