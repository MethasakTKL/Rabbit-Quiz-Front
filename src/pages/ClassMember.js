import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ClassMember.css";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth, ax } from "../auth/auth";
import ClassMemberList from "../Classroom/ClassMemberList";
import AddMemberClassRoom from "../components/Popup/AddMemberClassRoom";
import Linkform from "@mui/material/Link";
import { Link } from "react-router-dom";


function ClassMember() {
  let auth = useAuth()
  let id = localStorage.getItem("classid")

  const [classroomName, setClassroomName] = useState(null)
  const [memberList, setMemberList] = useState([])

  useEffect(() => {
    async function fetchClassroom() {
      let res = await ax.get(`classroom/${id}`)
      setClassroomName(res.data.classroomName)
    } fetchClassroom();
  }, [])



  return (
    <div>
      <Link to="/classroom" replace sx={{ textDecoration: "none" }}>
        <h1 className="classname" style={{ fontSize: 36 }}>
          ห้องเรียน {classroomName}
        </h1>
      </Link>


      <AddMemberClassRoom />


      <ClassMemberList />


    </div >
  );
}

export default ClassMember;
