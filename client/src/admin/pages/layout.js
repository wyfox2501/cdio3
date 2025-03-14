import Header from "../../components/header";
import SideBar from "../components_sidebar/sidebar";



const LayoutManager = ({children}) => {
    return (
    <div>
        <Header/>
        <div className='header'>
            <h1>Danh Sách Tài Khoản</h1>
        </div>
        <h2 className="title"><h2 className="title1">Adminstrator</h2></h2>
        <div className='main'>
            <SideBar />
            {children}
        </div>
    </div>
    );
}

export default LayoutManager;