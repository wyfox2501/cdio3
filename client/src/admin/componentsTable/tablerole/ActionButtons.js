import React from 'react';
import { Trash, Edit } from 'lucide-react'; 

const ActionButtons = ({ onEdit,onDelete }) => {
  return (
    <div>
      <button onClick={onDelete} ><Trash size={18} /></button> 
      <button onClick={onEdit}><Edit size={18} /></button> 
    </div>
  );
};

export default ActionButtons;

