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
  let userFirstname = localStorage.getItem('user_first_name')
  let userLastname = localStorage.getItem('user_last_name')

  let userEmail = localStorage.getItem('user_email')
  let userIsStaff = JSON.parse(localStorage.getItem('user_is_staff'))

  console.log('Profile has loaded ')
  return (
    <div>
      <h4 className="hello">สวัสดี, นี่คือโปรไฟล์ของคุณ</h4>{" "}
      <Grid>
        <Paper
          elevation={4}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
          className='screenpaper'
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
          <div className="allact">กิจกรรมที่ทำไปแล้วทั้งหมด</div>
        </Paper>
      </Grid>
      <Grid paddingTop={2}>
        <Paper
          elevation={4}
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className='screenpaper'
        >
          <h1
            className="editTitle"
            style={{ paddingLeft: 40, fontSize: 24, paddingTop: 40 }}
          >
            ข้อมูลส่วนตัว
          </h1>
          <Box className="boxEmail" >
            <Grid container spacing={0.5} alignItems="center" >
              <Grid item xs={4} md={2}>
                <div className="titlename">ชื่อ</div>
              </Grid>
              <Grid item xs={11.5} md={8}>
                <Box
                  className='boxemail'
                  sx={{}}
                >
                  <div className="name">{userFirstname}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="boxEmail" >
            <Grid container spacing={0.5} alignItems="center" >
              <Grid item xs={4} md={2}>
                <div className="titlename">นามสกุล</div>
              </Grid>
              <Grid item xs={11.5} md={8}>
                <Box
                  className='boxemail'
                  sx={{}}
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
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className='screenpaper'
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
              <Grid item xs={11.5} md={8}>
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
      <Box sx={{ paddingTop: 15 }}></Box>
    </div>
  );
}

export default Profile;
