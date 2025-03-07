import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Heading from "../../../../component/header/index";
import Sidebar from "../../components/sidebar/sidebar";
import Demo from "../../components/sidebar/dataSidebar"
home_appointment_management.propTypes = {};

function home_appointment_management(props) {
  return (
    <div>
      <Heading />
      <div className="body">
        <div className="side">
          <Demo />
          {/* <Sidebar /> */}
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default home_appointment_management;
