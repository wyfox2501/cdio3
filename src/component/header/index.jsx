import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Cat from '../../images/cat.png'
import Healthycare from "../../images/healthycare.jpg";
header.propTypes = {};

function header(props) {
  return (
    <div>
    <div class='menu'>
      <div class="left-menu">
        <div class="headthy">
          <img src={Healthycare} alt="HealthCare" />
          <h4>HealthCare</h4>
        </div>
        <div class="function">
          <a href="">Tổng Quan</a>
          <a href="">Quản Lý Lịch</a>
          <a href="">Nộp tiền</a>
        </div>
      </div>
      <div class="right-menu">
        <img src={Cat} alt="" />
        <div class="drop-menu">
        <a href="">Thông Tin Cá Nhân</a>
        <a href="">Đăng Xuất</a>
        </div>
    </div>
      </div>
    </div>
    
    
  );
}

export default header;
