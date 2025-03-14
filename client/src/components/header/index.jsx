import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Cat from "../../images/cat.png";
import Healthycare from "../../images/healthycare.jpg";

import { Link } from "react-router-dom";

Header.propTypes = {
  dataheader: PropTypes.array,
};
Header.defaultProps = {
  dataheader: [],
};



function Header({dataheader}) {
  return (
    <div>
      <div class="menu">
        <div class="left-menu">
          <Link className="health" to="/">
            <img src={Healthycare} alt="HealthCare" />
            <h4>HealthCare</h4>
          </Link>
          <div class="function">
            {dataheader.map(data=> (
              <React.Fragment key={data.id}>
                <a href="#">{data.title}</a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div class="right-menu">
          <img src={Cat} alt="" />
          <div class="drop-menu">
            <a href="">Thông Tin Cá Nhân</a>
            <a href="">Thông Tin Lịch Hẹn</a>
            <a href="">Đăng Xuất</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
