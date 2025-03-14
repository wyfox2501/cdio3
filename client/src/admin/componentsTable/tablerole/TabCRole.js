import React, { useState } from 'react';
import './tablerole.css';

const CreateRoleModal = ({ isModalOpen, closeModal, createRole }) => {
  const [roleName, setRoleName] = useState('');

  const handleCreateRole = () => {
    if (createRole) {  
      createRole(roleName);  
      setRoleName(''); 
    }
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2 className="titleCR">Create Role</h2>
          <input
            className="ERN"
            type="text"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
          <button className="btn" onClick={handleCreateRole}>
            Create Role
          </button>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default CreateRoleModal;
