import React, { useEffect } from 'react'
import axios  from 'axios'

import Table from './table';
const tittles = [
  'Tài khoản',
  'Các Quyền đang sở hữu',
  'trạng thái tài khoản'
]
let tableData = [
  ['Thái Đại Huân', 'Thành Viên', 'Bình thường'],
  ['Thái Đại Huân', 'Thành Viên', 'Bình thường'],
  ['Thái Đại Huân', 'Thành Viên', 'Bình thường'],
  ['Thái Đại Huân', 'bác sĩ', 'Bình thường']
]

export default function Todolist() {
  const [data, setData] = React.useState({ tittles: tittles, tableData: [...tableData] });
  useEffect(() => {
    axios.get('http://localhost:5010/auth/get-users')
      .then(res => {
        if (res.data){
          let tableData1 = [["","",""]];
          res.data.forEach(user => {
            tableData1.push([user.Email, user.Role, "Bình thường"]);
          });
          tableData1.shift();
          setData({ tittles: tittles, tableData: tableData1 });
          console.log(data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Table data={ data} />
  );
}
