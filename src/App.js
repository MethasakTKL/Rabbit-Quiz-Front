import "./App.css";
import React from "react";

//components
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import Layout from "./components/Bars/Layout";

//pages
import Falsepage from "./pages/Falsepage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Classroom from "./pages/ClassRoom";
import ClassMember from "./pages/ClassMember";
import ClassActivity from "./pages/ClassActivity";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPointsPage from "./pages/MyPointsPage";
import Activity from "./pages/Activity";

import ClassActivity_Teacher from "./Classroom/ClassActivity_Teacher.js";
//pages teacher

//authentic
import { RequireAuth } from "./auth/RequireAuth";
import { TeacherGuard } from "./auth/TeacherGuard";

function App() {

  const [id, setID] = React.useState(null)

  return (
    <div>

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route element={<RequireAuth />}>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/classroom-member" element={<ClassMember />} />
            <Route path="/classroom-activity" element={<ClassActivity />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/mypoints" element={<MyPointsPage />} />
            <Route path="*" element={<Falsepage />} />

            <Route element={<TeacherGuard />}>
              <Route path="/classroom-activity-teacher" element={<ClassActivity_Teacher />} />
            </Route>
          </Route>

        </Route>

      </Routes>
    </div >
  );
}

export default App;
