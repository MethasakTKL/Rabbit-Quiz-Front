import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useEffect } from "react";
import FaceIcon from "@mui/icons-material/Face";
import "./Profile.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";

//authentic
import { ax, useAuth } from "../auth/auth";

//components
import {
  EditProfilePopup,
  EditEmailPopup,
} from "../components/EditProfilePopup";

function Profile() {
  //เรียกข้อมูลหริอ fetch data มาใช้
  const auth = useAuth();
  const user = auth.user;

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
              {user.first_name + " " + user.last_name}
            </div>
            <div className="centerAccount">
              ประเภทบัญชี : {user.is_staff ? "คุณครู" : "นักเรียน"}
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
              <Grid item xs={10} md={4}>
                <Box
                  className='boxname'
                >
                  <div className="name">{user.first_name}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="boxprofile">
            <Grid container spacing={0.5}>
              <Grid item xs={4} md={2}>
                <div className="titlename">นามสกุล</div>
              </Grid>
              <Grid item xs={10} md={4}>
                <Box
                  className='boxname'
                >
                  <div className="name">{user.last_name}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* <Grid width={"70%"} margin="auto" paddingTop={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="ชื่อ"
              defaultValue={user.first_name}
              variant="filled"
              inputProps={{ style: { fontFamily: "Prompt" } }}
              InputLabelProps={{ style: { fontFamily: "Prompt" } }}
            />
          </Grid>
          <Grid width={"70%"} margin="auto" paddingTop={2} paddingBottom={2}>
            <TextField
              fullWidth
              id="standard-basic"
              label="นามสกุล"
              defaultValue={user.last_name}
              variant="filled"
              inputProps={{ style: { fontFamily: "Prompt" } }}
              InputLabelProps={{ style: { fontFamily: "Prompt" } }}
            />
          </Grid> */}

          <Grid paddingBottom={2} sx={{ marginLeft: "42%" }}>
            <EditProfilePopup userDetail={user} />
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
          <Box className="boxprofile">
            <Grid container spacing={0.5}>
              <Grid item xs={3} md={2}>
                <div className="titlename">อีเมล</div>
              </Grid>
              <Grid item xs={10} md={4}>
                <Box
                  className='boxname'
                >
                  <div className="name">{user.email}</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* <Grid width={"70%"} margin="auto" paddingTop={2} paddingBottom={2}>
            <TextField
              disabled
              fullWidth
              id="standard-basic"
              label="อีเมล"
              defaultValue={user.email}
              variant="filled"
              inputProps={{ style: { fontFamily: "Prompt" } }}
              InputLabelProps={{ style: { fontFamily: "Prompt" } }}
            />
          </Grid> */}

          <Grid paddingBottom={2} sx={{ marginLeft: "42%" }}>
            <EditEmailPopup userDetail={user} />
          </Grid>
        </Paper>
      </Grid>
      <Box sx={{ height: "5rem" }}></Box>
    </div>
  );
}

export default Profile;
