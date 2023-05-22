import "./ErrorAlert.css";

import React from "react";
import close from "../../assets/images/close.png";

const ErrorAlert = ({ message, onClose }) => {
  return (
    <div className="error-alert">
      <span className="error-message">{message}</span>
      <img src={close} onClick={onClose} alt="" className="close-cross" />
    </div>
  );
};

export default ErrorAlert;
