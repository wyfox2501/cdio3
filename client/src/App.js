import logo from "./logo.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./doctor/features/appointment_management/pages/home/home_appointment_management";
import ViewAppointment from "./doctor/features/appointment_management/pages/View_appointment/view_appointment";
import DataSidebar from "./doctor/features/appointment_management/dataSidebar";
import ViewSchedule from "./doctor/features/appointment_management/pages/View_work_schedule/Work_schedule";
import Add_calender from "./doctor/features/appointment_management/pages/Add_calender/Add_calender";
import NotFound from "./components/not-found-handle/NotFound";
import SignIn from "./auth/sign-in/SignIn";
import SignUp from "./auth/sign-up/SignUp";
import { useEffect } from "react";
import AuthLayout from "./auth/layout/AuthLayout";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/quan-li-lich" element={<DataSidebar />}>
          <Route index element={<ViewSchedule />} />
          <Route path="lichKham" element={<ViewAppointment />} />
          <Route path="lichLamViec" element={<ViewSchedule />} />
          <Route path="ThemLich" element={<Add_calender />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="dang-ky" element={<SignUp />} />
          <Route path="dang-nhap" element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <View /> */}
    </div>
  );
}

export default App;
