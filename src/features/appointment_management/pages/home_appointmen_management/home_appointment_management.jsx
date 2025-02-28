import React from 'react';
import PropTypes from 'prop-types';
import Phong from "../../../../images/p1-removebg-preview.png"
import Phong1 from "../../../../images/doctor.png"
import "./style.scss";
import Heading from "../../../../component/header/index";
import Sidebar from "../../components/sidebar/sidebar";
home_appointment_management.propTypes = {
    
};

function home_appointment_management(props) {
    return (
        <div>
            <Heading/>
            <div className='body'>
                <div className='side'>
                    <Sidebar/>
                </div>
                <div className="container">
                    <div className="image1">
                        <img src={Phong} alt="" />
                    </div>
                    <div className="image2">
                        <img src={Phong1} alt="" />
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default home_appointment_management;