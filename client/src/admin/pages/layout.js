import Header from "../../components/header";
import SideBar from "../components_sidebar/sidebar";
import { Outlet } from "react-router-dom";



const LayoutManager = ({children}) => {
    return (
    <div>
        <Header/>
        <div className='header'>
            <h1>Danh Sách Tài Khoản</h1>
        </div>
        <h2 className="title"><span className="title1">Adminstrator</span></h2>
        <div className='main'>
            <SideBar />
            {children}
            <Outlet />
        </div>
    </div>
    );
}

export default LayoutManager;