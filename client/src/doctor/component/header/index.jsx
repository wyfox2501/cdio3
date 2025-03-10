import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header/index'

Index.propTypes = {
    
};

function Index(props) {
    const headerDoctor=[
        {
            id: 1,
            title: 'Tổng Quan'
        },
        {
            id: 2,
            title: 'Quản Lý Lịch'
        },
        {
            id: 3,
            title: 'Nộp tiền'
        }
    ]
    return (
        <div>
            <Header dataheader={headerDoctor}/>
        </div>
    );
}

export default Index;