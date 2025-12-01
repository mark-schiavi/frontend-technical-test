import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVehicles } from '../../store/vehiclesSlice';

export default function useData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);
}
