import React from 'react'
import Heading from '../../components/header/index'
import { Outlet } from 'react-router-dom'
import './AuthLayout.scss'

const AuthLayout = () => {
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
        <div className='auth-layout-container'>
            <Heading dataheader = {headerDoctor} />
            <div className='body'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout