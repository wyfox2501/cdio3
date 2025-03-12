import logo from "./logo.svg";
import { Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import "./admin/css/tableAdmin.css"
import Home from "./doctor/features/appointment_management/pages/home/home_appointment_management.jsx";
import ViewAppointment from "./doctor/features/appointment_management/pages/View_appointment/view_appointment.jsx";
import DataSidebar from "./doctor/features/appointment_management/dataSidebar.jsx";
import ViewSchedule from "./doctor/features/appointment_management/pages/View_work_schedule/Work_schedule.jsx";
import Add_calender from "./doctor/features/appointment_management/pages/Add_calender/Add_calender.jsx";
import LayoutManager from "./admin/pages/layout.js";
import RoleManagerPage from "./admin/pages/roleManager.js";
import UserManager from "./admin/pages/userManager.js";
function App() {
  return (
    <div className="App">
          {<Routes>
            <Route path="/" element={<DataSidebar />} />
            <Route index element={<Home />} />
            <Route path="lichKham" element={<ViewAppointment />} />
            <Route path="lichLamViec" element={<ViewSchedule />} />
            <Route path="ThemLich" element={<Add_calender />} />
            <Route path="/pages/roleManager" element={<LayoutManager><RoleManagerPage /></LayoutManager>} />
            <Route path="/pages/userManager" element={<LayoutManager><UserManager /></LayoutManager>} />
          </Routes>
          }
    </div>
  );
}

export default App;
