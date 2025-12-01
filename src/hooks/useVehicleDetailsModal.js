import { useRef, useEffect } from 'react';

export default function useVehicleDetailsModal(open, onClose) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.showModal();
      dialogRef.current.focus();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (open) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
    return undefined;
  }, [open, onClose]);

  return {
    dialogRef,
  };
}
