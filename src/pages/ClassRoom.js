import { Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { Box, grid, spacing } from "@mui/system";
import React from "react";
import "./ClassRoom.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";

function Classroom() {
  return (
    <div>
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        ห้องเรียน 240-124
      </h1>
      <Stack direction="row" spacing={2} paddingLeft={"5%"} paddingBottom={1}>
        <Button
          className="button1"
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#F19528" }}
          to="/classroom-member"
          component={Link}
        >
          <PeopleAltIcon /> สมาชิก
        </Button>
        <Button
          className="button2"
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#51D87A" }}
          to="/classroom-activity"
          component={Link}
        >
          <QuizIcon /> กิจกรรม
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
            paddingBottom: 2
          },
        }}
      >
        <Paper elevation={3}>
          <h1 className="post" style={{ paddingLeft: 40, fontSize: 24 }}>
            ประกาศข้อความของคุณ
          </h1>
          <Grid  direction="row" spacing={2} direction='row'>
            <Grid item className="center" >
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
              sx={{ width: '100%', height: 50, borderRadius: 4 }}
              style={{ background: "#5F498C" }}
            >
              โพสต์
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
            height: 200,
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={3}></Paper>
      </Box>
    </div>
  );
}

export default Classroom;
