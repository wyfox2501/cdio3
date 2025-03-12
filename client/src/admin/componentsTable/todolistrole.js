import React from 'react';
import Table from './tablerole';  // Đảm bảo nhập đúng kiểu
import { Edit, Trash } from 'lucide';

const tittles = [
  'Tên Quyền',
  'Action',
];
const tableData = [
  ['Thành Viên'],
  ['Bác Sĩ'],
  ['Admin']
];
const icon = [
    [ '🗑️ 📝'],
    [ '🗑️ 📝'],
    [ '🗑️ 📝']
]
  const data = { tittles, tableData, icon};


export default function Todolistrole() {
  return (
    <Table data={data} />
  );
}
