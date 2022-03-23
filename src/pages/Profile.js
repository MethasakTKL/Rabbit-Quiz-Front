import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";

//authentic
import { ax, useAuth } from "../auth/auth";

//components
import {
  EditProfilePopup,
  EditEmailPopup,
} from "../components/Popup/EditProfilePopup";




function Profile() {
  //เรียกข้อมูลหริอ fetch data มาใช้
  let navigate = useNavigate()
  const [user, setUser] = useState()
  const [userFirstname, setUserFirstname] = useState('')
  const [userLastname, setUserLastname] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userIsStaff, setUserIsStaff] = useState(null)

  let timeout;

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      async function fetchData() {
        const response = await ax.get('/userdetail')
        setUser(response.data)
        setUserFirstname(response.data.first_name)
        setUserLastname(response.data.last_name)
        setUserEmail(response.data.email)
        setUserIsStaff(response.data.is_staff)
      }
      fetchData();
    }, 0);
  }, []);

  return (
    <div>
      <h4 className="hello">สวัสดี, นี่คือโปรไฟล์ของคุณ</h4>{" "}
      <Grid>
        <Paper
          elevation={4}
          sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid spacing={2} paddingBottom={5}>
            <div className="centerIcon">
              <FaceIcon sx={{ fontSize: 100, color: "#F19528" }} />
            </div>
            <div className="centerName">
              {userFirstname + " " + userLastname}
            </div>
            <div className="centerAccount">
              ประเภทบัญชี : {userIsStaff ? "คุณครู" : "นักเรียน"}
            </div>
          </Grid>
        </Paper>
      </Grid>
      <Grid paddingTop={2}>
        <Paper
          elevation={4}
          sx={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1
            className="editTitle"
            style={{ paddingLeft: 40, fontSize: 24, paddingTop: 40 }}
          >
            ข้อมูลส่วนตัว
          </h1>
          <Box className="boxprofile">
            <Grid container spacing={0.5}>
              <Grid item xs={4} md={2}>
                <div className="titlename">ชื่อ</div>
              </Grid>
              <Grid item xs={11.5} md={4}>
                <Box
                  className='boxname'
                >
                  <div className="name">{userFirstname}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="boxprofile">
            <Grid container spacing={0.5}>
              <Grid item xs={4} md={2}>
                <div className="titlename">นามสกุล</div>
              </Grid>
              <Grid item xs={11.5} md={4}>
                <Box
                  className='boxname'
                >
                  <div className="name">{userLastname}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid paddingBottom={2} sx={{ marginLeft: "42%" }}>
            <EditProfilePopup />
          </Grid>
        </Paper>
      </Grid>
      <Grid paddingTop={2}>
        <Paper
          elevation={4}
          sx={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1
            className="editTitle"
            style={{ paddingLeft: 40, fontSize: 24, paddingTop: 40 }}
          >
            ที่อยู่อีเมล
          </h1>
          <Box className="boxEmail" >
            <Grid container spacing={0.5} alignItems="center" >
              <Grid item xs={4} md={2}>
                <div className="titlename">อีเมล</div>
              </Grid>
              <Grid item xs={11.5} md={4}>
                <Box
                  className='boxemail'
                  sx={{}}
                >
                  <div className="name">{userEmail}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid paddingBottom={2} sx={{ marginLeft: "42%" }}>
            <EditEmailPopup />
          </Grid>
        </Paper>
      </Grid>
      <Box sx={{ height: "5rem" }}></Box>
    </div>
  );
}

export default Profile;
