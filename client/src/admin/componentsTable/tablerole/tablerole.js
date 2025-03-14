import './ButtonCreateRole';
import './tablerole.css';
import CreateRoleButton from './ButtonCreateRole';
import { useState } from 'react';
import CreateRoleModal from './TabCRole';
import ActionButtons from './ActionButtons';
import EditRoleModal from './TabERole';

const Table = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roles, setRoles] = useState(data.tableData || []);
  const [notification, setNotification] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);

  //mo
  const openCreateRoleModal = () => {
    setIsModalOpen(true);
  };
  const openEditModal = (roleName) => {
    setEditingRole(roleName);
    setIsEditModalOpen(true);
  };

  //dong
  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
    setNotification('');
  };

  //them
  const createRole = (roleName) => {
    if (roles.some((row) => row[0] === roleName)) {
      setNotification('Thêm rôn thất bại');
    } else {
      const newRole = [
        roleName,
        <ActionButtons 
          onEdit={() => openEditModal(roleName)} 
          onDelete={() => deleteRole(roles.length)}
        />
      ];
      setRoles([...roles, newRole]);
      setNotification('Thêm rôn thành công');
      closeModal();
    }
  };

  //xoa
  const deleteRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  //update
  const updateRole = (oldRole, newRole) => {
    setRoles((prevRoles) =>
      prevRoles.map((row) =>
        row[0] === oldRole
          ? [
              newRole,
              <ActionButtons 
                onEdit={() => openEditModal(newRole)} 
                onDelete={() => deleteRole(roles.indexOf(row))}
              />
            ]
          : row
      )
    );
    setNotification('Cập nhật rôn thành công');
    closeModal();
  };



  return (
    <div className="table-container">
      <CreateRoleButton onClick={openCreateRoleModal} />
      {notification && (
        <div className={`notification ${notification.includes('thất bại') ? 'error' : 'success'}`}>
          {notification}
        </div>
      )}

      <CreateRoleModal isModalOpen={isModalOpen} closeModal={closeModal} createRole={createRole} />

      <EditRoleModal isOpen={isEditModalOpen} closeModal={closeModal} role={editingRole} updateRole={updateRole} />

      <div className="backgroundBlue">
        <table className="table">
          <thead>
            <tr>
              {data.tittles.map((tittle, index) => (
                <th scope="col" className="header-cell" key={index}>
                  {tittle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
