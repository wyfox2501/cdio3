import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header/index'
import Home from '../../features/home/pages/home'
import { Outlet } from 'react-router-dom';
import "./style.scss"

Index.propTypes = {

};

function Index(props) {
    const dataheader = [
        {
            id: 1,
            title: "Tổng Quan"
        },
        {
            id: 2,
            title: "Tình Trạng Sức Khỏe"
        }
    ]
    return (
        <div className='total-container'>
            <Header dataheader={dataheader} />
            <Outlet />
        </div>
    );
}

export default Index;