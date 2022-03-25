import { Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./ClassRoom.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth, ax } from "../auth/auth";
import ClassAnnoucement from "../Classroom/ClassAnnoucement";
import LogoutIcon from "@mui/icons-material/Logout";
import Leaveroom from "../components/Popup/Leaveroom";
import { message } from "antd";
import { useNavigate } from "react-router";
import ClassSetting from "../Classroom/ClassSetting";

function Classroom() {
  let auth = useAuth();
  let id = localStorage.getItem("classid")
  let navigate = useNavigate()
  const [classroomName, setClassroomName] = useState(null);
  useEffect(() => {
    async function fetchClassroom() {
      try {
        let res = await ax.get(`/classroom/${id}`);
        setClassroomName(res.data.classroomName);
      } catch (err) {
        if (err.response.data.detail) {
          navigate("/reload")
          navigate("/classroom")
        }
      }
    }
    fetchClassroom();
  }, []);

  let isstaff = JSON.parse(localStorage.getItem('user_is_staff'))

  return (
    <div className="screen">
      <h1 className="classname" style={{ fontSize: 36 }}>
        ห้องเรียน {classroomName}
      </h1>
      <Stack
        direction="row"
        spacing={2}
        paddingBottom={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#F19528" }}
          to="/classroom-member"
          component={Link}
        >
          <PeopleAltIcon sx={{ color: "#ffffff" }} />
          <div className="button1">สมาชิก</div>
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#51D87A" }}
          to="/classroom-activity"
          component={Link}
        >
          <QuizIcon sx={{ color: "#ffffff" }} />
          <div className="button2">กิจกรรม</div>
        </Button>
        {isstaff ? <ClassSetting /> :
          <Leaveroom />
        }


      </Stack>
      <ClassAnnoucement />
    </div>
  );
}

export default Classroom;
