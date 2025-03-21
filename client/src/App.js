import RoleManagerPage from "./admin/pages/roleManager.js";
import UserManager from "./admin/pages/userManager.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./customer/features/home/pages/home";
import ViewAppointment from "./doctor/features/appointment_management/pages/View_appointment/view_appointment";
import DataSidebar from "./doctor/features/appointment_management/dataSidebar";
import ViewSchedule from "./doctor/features/appointment_management/pages/View_work_schedule/Work_schedule";
import Add_calender from "./doctor/features/appointment_management/pages/Add_calender/Add_calender";
import NotFound from "./components/not-found-handle/NotFound";
import SignIn from "./auth/sign-in/SignIn";
import SignUp from "./auth/sign-up/SignUp";
import { useEffect } from "react";
import AuthLayout from "./auth/layout/AuthLayout";
import { ProtectedRoute } from "./services/jwt-services/JWTService";
import HomeLayout from "./customer/component/header/index";
import CancelSchedule from "./doctor/features/appointment_management/pages/Cancel_schedule/Cancel_schedule";
import DeleteSchedule from "./doctor/features/appointment_management/pages/Delete_calender/Delete_shedule";
import AdminLayout from "./admin/pages/layout.js";
import DoctorSelection from "./customer/features/make_an_appointment/component/DoctorSelection.jsx"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute necessaryRole="Patient" />}>
          <Route path="chon-bac-si" element={<DoctorSelection />} />
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        <Route path="/" element={<ProtectedRoute necessaryRole="Doctor" />}>
          <Route path="/quan-li-lich" element={<DataSidebar />}>
            <Route index element={<ViewSchedule />} />
            <Route path="lichKham" element={<ViewAppointment />} />
            <Route path="lichLamViec" element={<ViewSchedule />} />
            <Route path="ThemLich" element={<Add_calender />} />
            <Route path="huy-lich" element={<CancelSchedule />} />
            <Route path="xoa-lich" element={<DeleteSchedule />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="dang-ky" element={<SignUp />} />
          <Route path="dang-nhap" element={<SignIn />} />
        </Route>
        <Route path="/admin" element={<ProtectedRoute necessaryRole="Admin" />}>
          <Route path="" element={<AdminLayout />}>
            <Route path="role-manager" element={<RoleManagerPage />} />
            <Route path="user-manager" element={<UserManager /> } />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;







