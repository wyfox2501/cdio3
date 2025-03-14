import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header/index'
import Home from '../../features/home/pages/home'
import { Outlet } from 'react-router-dom';
import "./style.scss"

Index.propTypes = {

};

function Index(props) {
    return (
        <div className='total-container'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Index;