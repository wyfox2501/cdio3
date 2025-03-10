import React from "react";
import PropTypes from "prop-types";
import Demo from "./components/sidebar/sidebar";
import Heading from "../../component/header/index";
import { Outlet } from "react-router-dom";
import "./styleIndex.scss";
import Footing from '../../../components/footer/Footer.js'
DataSidebar.propTypes = {};

function DataSidebar(props) {
  const managerList = [
    {
      id: 1,
      title: "Xem Lịch",
    },
    {
      id: 2,
      title: "Thêm Lịch",
      path: "/themlich",
    },
    {
      id: 3,
      title: "Hủy Lịch",
      path: "/huylich",
    },
    {
      id: 4,
      title: "Xóa Lịch",
      path: "/xoalich",
    },
    {
      id: 5,
      title: "Xem Lịch Sử Lịch Khám",
      path: "/xemLichSuLichKham",
    },
    {
      id: 6,
      title: "Chốt Lịch",
      path: "/chotLich",
    },
  ];
  const viewList = [
    {
      id_view: "kham",
      title: "Lịch Khám",
      id: 1,
      path: "LichKham",
    },
    {
      id_view: "work",
      title: "Lịch Làm Việc",
      id: 1,
      path: "/LichLamViec",
    },
  ];
  return (
    <div>
      <Heading />
      <div className="body">
        <div className="side">
          <Demo managerList={managerList} viewList={viewList} />
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footing/>
    </div>
  );
}

export default DataSidebar;
