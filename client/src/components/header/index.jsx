import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Cat from "../../images/cat.png";
import Healthycare from "../../images/healthycare.jpg";

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
          <div class="headthy">
            <img src={Healthycare} alt="HealthCare" />
            <h4>HealthCare</h4>
          </div>
          <div class="function">
            {dataheader?.map(data=> (
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
            <a href="">Đăng Xuất</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
