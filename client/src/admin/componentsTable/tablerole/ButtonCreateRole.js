import React from 'react';
const CreateRoleButton = ({ onClick }) => {
  return (
    <div className="createrolebutton">
      <button className="btncreaterole" onClick={onClick}>
        Bú
      </button>
    </div>
  );
};

export default CreateRoleButton;