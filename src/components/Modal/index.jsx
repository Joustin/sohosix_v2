import React from "react";
import ReactModal from "react-modal";
import CloseIcon from "./CloseIcon";

const Modal = ({ dismissable, isOpen, onRequestClose, children, ...props }) => {
  const closeButton = (
    <div className="close-button">
      <button type="button" name="close" onClick={onRequestClose}>
        <CloseIcon className="close-icon" />
        <span className="sr-only">Close Modal</span>
      </button>
    </div>
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
      appElement={document.getElementById("root") || undefined}
      {...props}
    >
      {dismissable && closeButton}
      {children}
    </ReactModal>
  );
};

export default Modal;
