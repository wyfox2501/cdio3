import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./doctor/features/appointment_management/pages/home/home_appointment_management.jsx";
import ViewAppointment from "./doctor/features/appointment_management/pages/View_appointment/view_appointment.jsx";
import DataSidebar from "./doctor/features/appointment_management/dataSidebar.jsx";
import ViewSchedule from "./doctor/features/appointment_management/pages/View_work_schedule/Work_schedule.jsx";
import Add_calender from "./doctor/features/appointment_management/pages/Add_calender/Add_calender.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DataSidebar />}>
          <Route index element={<Home />} />
          <Route path="lichKham" element={<ViewAppointment />} />
          <Route path="lichLamViec" element={<ViewSchedule />} />
          <Route path="ThemLich" element={<Add_calender />} />
        </Route>
      </Routes>
      {/* <View /> */}
    </div>
  );
}

export default App;
