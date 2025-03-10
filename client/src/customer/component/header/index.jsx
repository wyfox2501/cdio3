import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header/index'

Index.propTypes = {
    
};

function Index(props) {
    const dataheader=[
        {
            id: 1,
            title: "Tổng Quan"
        },
        {
            id:2,
            title: "Tình Trạng Sức Khỏe"
        }
    ]
    return (
        <div>
            <Header dataheader={dataheader}/>
        </div>
    );
}

export default Index;