import { Button, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ClassRoom.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";

function Classroom() {
  return (
    <div>
      <h1 className="classname">ห้องเรียน 240-124</h1>
      <Stack direction="row" spacing={2} paddingLeft={2.5} paddingBottom={1}>
        <Button
          className="button1"
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#F19528" }}
          to="/classroom-activity"
          component={Link}
        >
          <PeopleAltIcon /> กิจกรรม
        </Button>
        <Button
          className="button2"
          variant="contained"
          sx={{ borderRadius: 3, width: 120 }}
          style={{ background: "#51D87A" }}
          to="/classroom-member"
          component={Link}
        >
          <QuizIcon /> สมาชิก
        </Button>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: 220,
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={3}></Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: 700,
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
