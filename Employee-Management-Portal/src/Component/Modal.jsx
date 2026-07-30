import "../Styles/Modal.css";

function Modal({ title, message, confirmText = "Confirm", onConfirm, onClose, showCancel=true,}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-actions">
          {showCancel &&(
          <button className="cancel-btn" onClick={onClose} >
            Cancel
          </button>
            )}
          <button className="confirm-btn" onClick={onConfirm} >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;