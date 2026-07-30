import "../Styles/Modal.css";
import Button from "./Button";

function Modal({ title, message, confirmText = "Confirm", confirmColor = "danger", onConfirm, onClose,}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()} >
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <Button className="cancel-btn" type="button" onClick={onClose} > Cancel </Button>
          <Button className={`confirm-btn ${confirmColor}`} type="button" onClick={onConfirm} > {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Modal;