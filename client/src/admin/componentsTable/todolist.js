import React from 'react'
import SideBar from '../components_sidebar/sidebar';
import Table from './table';


const tittles = [
  'Tài khoản',
  'Các Quyền đang sở hữu',
  'trạng thái tài khoản'
]
const tableData = [
  ['Thái Đại Huân', 'Thành Viên', 'Bình thường'],
  ['Thái Đại Huân', 'Bác Sĩ', 'Bình thường'],
  ['Thái Đại Huân', 'Bác Sĩ', 'Bình thường'],
  ['Thái Đại Huân', 'Bác Sĩ', 'Bình thường'],
  ['Thái Đại Huân', 'Thành Viên', 'Bình thường']
]
const data = { tittles, tableData };
export default function Todolist() {
  return (
    <Table data={ data} />
  );
}
