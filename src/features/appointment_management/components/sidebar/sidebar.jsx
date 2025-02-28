import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useState } from "react";
import He from "../../../../component/header/index";
Sidebar.propTypes = {};

function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isOn, setIsOn] = useState("#ffffff");
  const [activeLink, setActiveLink] = useState(null);
  //lên xún dropdown và đổi màumàu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setBgColor(isOpen ? "#ffffff" : "#DDF1F9");
  };
  //đổi màu trong dropdowmdropdowm
  const toggleColor = () => {
    setIsOn("#DDF1F9");
  };
  //đổi màu khi click chọn
  const handleClick = (id) => {
    setActiveLink(id); // Cập nhật thẻ đang được chọn
  };
  return (
    <div>
      <div className="sidebar">
        <a
          className="view-calendar"
          href="#"
          onClick={()=>{
            toggleDropdown();
            handleClick("xem-lich");
          }}
          style={{ backgroundColor: activeLink==="xem-lich"? bgColor:"#ffffff" }}
        >
          <span>⚫</span>
          Xem Lịch {isOpen ? "▲" : "▼"}
        </a>
        {isOpen && (
          <div className="calendar">
            <a href="#" style={{ backgroundColor: activeLink==="lich-kham"? isOn:"#ffffff" }} onClick={()=>{toggleColor();handleClick("lich-kham")}}>
              Xem Lịch Khám
            </a>
            <a href="#" style={{ backgroundColor: activeLink==="lich-lam-viec"? isOn:"#ffffff" }} onClick={()=>{toggleColor();handleClick("lich-lam-viec")}}>Xem lịch Làm Việc</a>
          </div>
        )}
        <a href="#" style={{ backgroundColor: activeLink==="them-lich"? isOn:"#ffffff" }} onClick={()=>{toggleColor();handleClick("them-lich");}}>
          <span>⚫</span>Thêm Lịch
        </a>
        <a href="#" style={{ backgroundColor: activeLink==="lich-su"? isOn:"#ffffff" }} onClick={()=>{toggleColor();handleClick("lich-su");}}>
          <span>⚫</span>Xem Lịch Sử Khám
        </a>
        <a href="#" style={{ backgroundColor: activeLink==="chot-lich"? isOn:"#ffffff" }} onClick={()=>{toggleColor();handleClick("chot-lich");}}>
          <span>⚫</span>Chốt Lịch
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
