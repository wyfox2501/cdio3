import React from 'react';
const CreateRoleButton = ({ onClick }) => {
  return (
    <div className="createrolebutton">
      <button className="btncreaterole" onClick={onClick}>
        Thêm Role
      </button>
    </div>
  );
};

export default CreateRoleButton;