import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import "./Profile_Teacher.css";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import SaveIcon from '@mui/icons-material/Save';
import AccountCircle from "@mui/icons-material/AccountCircle";


function Profile_Teacher() {
  return (
    <div>
      <h4 className="hello">สวัสดี, นี่คือโปรไฟล์ของคุณ</h4>{" "}
      <Grid>
        <Paper
          elevation={4}
          sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid direction="row" spacing={2} direction="row" paddingBottom={5}>
            <div className="centerIcon">
              <AccountCircle sx={{ fontSize: 100, color: "#F19528" }} />
            </div>
            <div className="centerName">อารีย์  มีสุข</div>
            <div className="centerAccount">ประเภทบัญชี : คุณครู</div>
          </Grid>
          <Grid textAlign='center' paddingBottom={2}>
            <Button variant="contained" style={{background:'#CD0049'}} to='/login' component={Link}>
              <div className="logoutIcon"><LogoutIcon sx={{fontSize:20}}/></div>
              <div className="logout" >ออกจากระบบ</div>
            </Button>
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
          <h1 className="editTitle" style={{ paddingLeft: 40, fontSize: 24 }}>
            แก้ไขข้อมูลส่วนตัว
          </h1>
          <Grid width={"70%"} margin="auto">
            <TextField
              fullWidth
              id="standard-basic"
              label="ชื่อ"
              defaultValue="อารีย์"
              variant="filled"
              inputProps={{style: {fontFamily: "Prompt"}}}
              InputLabelProps={{style: {fontFamily: "Prompt"}}}
            />
          </Grid>
          <Grid width={"70%"} margin="auto" paddingTop={2} paddingBottom={2}>
            <TextField
              fullWidth
              id="standard-basic"
              label="นามสกุล"
              defaultValue="มีสุข"
              variant="filled"
              inputProps={{style: {fontFamily: "Prompt"}}}
              InputLabelProps={{style: {fontFamily: "Prompt"}}}
            />
          </Grid>
          <Grid paddingBottom={2} sx={{ marginLeft: "60%" }}>
            <Button variant="contained" sx={{ width: "60%" }}>
              <div className="saveButtonIcon"><SaveIcon/></div>
              <div className="saveButton">บันทึก</div>
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Profile_Teacher;
