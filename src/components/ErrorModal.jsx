import React from "react";

function ErrorModal({ error, clearError }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{error}</p>
        <button className="close" onClick={clearError}>
          close
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
