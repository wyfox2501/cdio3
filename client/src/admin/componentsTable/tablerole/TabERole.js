import { useState, useEffect } from 'react';

const EditRoleModal = ({ isOpen, closeModal, role, updateRole }) => {
  const [newRole, setNewRole] = useState(role || '');
  useEffect(() => {
    setNewRole(role || '');
  }, [role]);

  const handleUpdate = () => {
    updateRole(role, newRole);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2  className='btnErole1'>Edit</h2>
          <input  className='btnErole2' type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} />
          <button className='btnErole' onClick={handleUpdate}>Cập Nhật Quyền</button>
          <button className='btnEroleback' onClick={closeModal}>Trở Về</button>
        </div>
      </div>
    )
  );
};

export default EditRoleModal;
