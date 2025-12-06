import { createPortal } from "react-dom";
import useModal from "../../../hooks/useModal";
import "./ModalPopup.scss";

export default function ModalPopup({ children, open, onClose }) {
    const { dialogRef } = useModal(open, onClose);

    if (!open) return null;

    return createPortal(
        <>
            <div className="modal-popup__overlay" />
            <dialog
                ref={dialogRef}
                aria-modal="true"
                aria-labelledby="modal-popup-title"
                className="modal-popup"
                tabIndex={-1}
                onCancel={onClose}
            >
                <button
                    className="modal-popup__close"
                    onClick={onClose}
                    aria-label="Close modal"
                    type="button"
                >
                    ×
                </button>
                {children}
            </dialog>
        </>,
        document.body
    );
}
