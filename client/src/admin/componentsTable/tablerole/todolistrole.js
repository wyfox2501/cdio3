import React from 'react';
import Table from './tablerole'; 
import ActionButtons from './ActionButtons'; // Sử dụng import thay vì khai báo lại


const tittles = ['Tên Quyền', 'Action'];
const tableData = [
  ['Thành Viên', <ActionButtons />],
  ['Bác Sĩ', <ActionButtons />],
  ['Admin', <ActionButtons />]
];

const data = { tittles, tableData };

export default function Todolistrole() {
  return (
    <div>
      <Table data={data} />
    </div>
  );
}
