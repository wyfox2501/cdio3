import React from 'react';
import PropTypes from 'prop-types';
import Demo from './sidebar';
DataSidebar.propTypes = {
    
};

function DataSidebar(props) {
    const managerList = [
        {
            id: 1,
            title: 'Xem Lịch'
        },
        {
            id: 2,
            title: 'Thêm Lịch'
        },
        {
            id: 3,
            title: 'Xem Lịch Sử Lịch Khám'
        },
        {
            id: 4,
            title: 'Chốt Lịch'
        },
        {
            id:5,
            title: "sinh"
        }
    ]
    const viewList =[
        {
            id_view: 'kham',
            title: 'Lịch Khám',
            id: 1
        },
        {
            id_view: 'work',
            title: 'Lịch Làm Việc',
            id: 1
        }
    ]
    return (
        <div>
            <Demo managerList={managerList} viewList={viewList}/>
        </div>
    );
}

export default DataSidebar;