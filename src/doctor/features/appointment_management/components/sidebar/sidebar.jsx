import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useState } from "react";
import He from "../../../../../components/header/index";
Demo.propTypes = {
    managerList: PropTypes.array,
};
Demo.defaultProps ={
    managerList: [],
};

function Demo({managerList, viewList}) {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isOn, setIsOn] = useState("#ffffff");
  const [activeLink, setActiveLink] = useState(null);
const id=1;
  //lên xún dropdown và đổi màumàu
  const toggleDropdown = (id) => {
    if (id===1){
        setIsOpen(!isOpen);
        setBgColor(isOpen ? "#ffffff" : "#DDF1F9");
    }
  
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
      {managerList.map(data=>(
        <React.Fragment key={data.id}>
        <a
          className="view-calendar"
          href="#"
          onClick={() => {
            toggleDropdown(data.id);
            handleClick(data.id)
          }}
          style={{
            backgroundColor: activeLink === data.id ? bgColor : "#ffffff",
          }}
        >
          <span>⚫</span>
          {data.title} { data.id===1 && (isOpen ? "▲" : "▼")}
        </a>
        {isOpen && data.id===1 && (
            <div  className="calendar">
            {viewList.map(dataview=>(
                
            <a
            key={dataview.id_view}
              href="#"
              style={{
                backgroundColor: activeLink === dataview.id_view ? isOn : "#ffffff",
              }}
              onClick={() => {
                toggleColor();
                handleClick(dataview.id_view);
              }}
            >
              {dataview.title}
            </a>
            ))}
            </div>
        )}
        </React.Fragment>
        ))}
    </div>
    </div>
  );
}

export default Demo;
