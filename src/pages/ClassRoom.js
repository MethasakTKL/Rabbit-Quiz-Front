import { Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { Box, grid, spacing } from "@mui/system";
import React from "react";
import "./ClassRoom.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";

function Classroom() {
  return (
    <div className="screen">
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        ห้องเรียนการเกษตร
      </h1>
      <Stack direction="row" spacing={2} paddingLeft={"5%"} paddingBottom={1}>
        <Button
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#F19528" }}
          to="/classroom-member"
          component={Link}
        >
          <PeopleAltIcon />
          <div className="button1">สมาชิก</div>
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#51D87A" }}
          to="/classroom-activity"
          component={Link}
        >
          <QuizIcon />
          <div className="button2">กิจกรรม</div>
        </Button>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: "auto",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: 2,
          },
        }}
      >
        <Paper elevation={3}>
          <h1 className="post" style={{ paddingLeft: 40, fontSize: 24 }}>
            ประกาศข้อความของคุณ
          </h1>
          <Grid direction="row" spacing={2} direction="row">
            <Grid item className="center">
              <TextField
                label="สร้างโพสต์"
                placeholder="พิมพ์ข้อความที่ต้องการบอกสมาชิกในห้องเรียน"
                margin="normal"
                style={{ width: "90%" }}
                multiline
              />
            </Grid>
            <Grid className="postbutton">
              <Button
                className="postbutton"
                variant="contained"
                sx={{ width: "100%", height: 50, borderRadius: 4 }}
                style={{ background: "#5F498C" }}
              >
                <div className="postbuttontext">โพสต์</div>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: "auto",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={3} paddingBottom={10}>
          <h1 className="post" style={{ paddingLeft: 40, fontSize: 24 }}>
            โพสต์ล่าสุด
          </h1>
          {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
          <Paper
            style={{
              background: "#E7E6E5",
              width: "80%",
              height: "auto",
              margin: "auto",
              borderRadius: 10,
            }}
          >
            <Grid container direction="row" alignItems="center" paddingLeft={2}>
              <AccountCircleIcon sx={{ fontSize: 30, color: "#9C2431" }} />
              <p className="postername">อารีย์ มีสุข</p>
            </Grid>
            <p className="postinfo">
              ให้นักเรียนทำกิจกรรมที่ 2 ให้เสร็จภายในวันที่ 3 มีนาคม 2565
            </p>
          </Paper>
          {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
          <Paper
            style={{
              background: "#E7E6E5",
              width: "80%",
              height: "auto",
              margin: "auto",
              borderRadius: 10,
            }}
          >
            <Grid container direction="row" alignItems="center" paddingLeft={2}>
              <FaceIcon sx={{ fontSize: 30, color: "#F19528" }} />
              <p className="postername">อิฟฟาฮาน สุขสุวรรณ</p>
            </Grid>
            <p className="postinfo">คุณครูครับ ต้องทำกิจกรรมที่ 2 เลยไหมครับ</p>
          </Paper>
          {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
          <Paper
            style={{
              background: "#E7E6E5",
              width: "80%",
              height: "auto",
              margin: "auto",
              borderRadius: 10,
            }}
          >
            <Grid container direction="row" alignItems="center" paddingLeft={2}>
              <AccountCircleIcon sx={{ fontSize: 30, color: "#9C2431" }} />
              <p className="postername">อารีย์ มีสุข</p>
            </Grid>
            <p className="postinfo">
              ให้นักเรียนทำกิจกรรมที่ 1 ให้เสร็จภายในวันที่ 24 กุมภาพันธ์ 2565
            </p>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
}

export default Classroom;
