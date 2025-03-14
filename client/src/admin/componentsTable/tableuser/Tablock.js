import React from "react";

const Tablock = ({ show, onClose, onConfirm, message }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Xác nhận</h2>
                <p>{message}</p>
                <button onClick={onConfirm}>Xác nhận</button>
                <button onClick={onClose}>Hủy</button>
            </div>
        </div>
    );
};

export default Tablock;
