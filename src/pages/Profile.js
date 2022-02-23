import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { Box } from "@mui/system";
import "./Profile.css";

function Profile() {
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
              <FaceIcon sx={{ fontSize: 100, color: "#F19528" }} />
            </div>
            <div className="centerName">ชนาวัฒน์ ทั้วสุภาพ</div>
            <div className="centerAccount">ประเภทบัญชี : นักเรียน</div>
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
          <Grid width={'50%'} margin='auto'>
            <TextField
              fullWidth
              id="standard-basic"
              label="ชื่อ"
              defaultValue="ชนาวัฒน์"
 
              variant="filled"
            />
          </Grid>
          <Grid width={'50%'} margin='auto' paddingTop={2} paddingBottom={2}>
            <TextField
              fullWidth
              id="standard-basic"
              label="นามสกุล"
              defaultValue="ทั้วสุภาพ"
              variant="filled"

            />
          </Grid>
          <Grid paddingLeft={65} paddingBottom={2}>
            <Button variant="contained" sx={{width:100}}>
              <div className="saveButton">บันทึก</div>
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Profile;
