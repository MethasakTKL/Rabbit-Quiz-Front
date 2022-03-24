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
import ClassAnnoucement from "./ClassAnnoucement";


function Classroom() {
  let auth = useAuth()
  let id = auth.id

  const [classroomName, setClassroomName] = useState(null)

  useEffect(() => {
    async function fetchClassroom() {
      let res = await ax.get(`/classroom/${id}`)
      setClassroomName(res.data.classroomName)
    } fetchClassroom();
  }, [])

  return (
    <div className="screen">
      <h1 className="classname" style={{ fontSize: 36 }}>
        {classroomName}
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
      </Stack>
      <ClassAnnoucement />
      <Box sx={{ paddingTop: 15 }}></Box>
    </div>
  );
}


export default Classroom;
