import { Button, Box, Paper, Grid } from "@mui/material";
import React from "react";
import "./ClassMember.css";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function ClassMember() {
  return (
    <div>
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        หห้องเรียนการเกษตร
      </h1>
      <Paper
        className="membertopic"
        variant="contained"
        sx={{
          borderRadius: 3,
          width: 150,
          height: 40,
          marginLeft: "5%",
          marginRight: 0,
        }}
        style={{ background: "#F19528" }}
      >
        <h3 className="center" style={{ paddingLeft: "30%", paddingTop: 5 }}>
          สมาชิก
        </h3>
        {/* // Mockup data----------------------------------------------------------------------------------------------------------------------- */}
      </Paper>
      <Box
        sx={{
          width: "80%",
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 2,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingLeft={3}
            sx={{ background: "#E4E4E5" }}
          >
            <AccountCircleIcon sx={{ fontSize: 40 , color:'#9C2431'}} />
            <p className="centertext">อาจารย์ อารีย์ มีสุข</p>
          </Grid>
        </Card>
      </Box>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "75%",
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 7,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingLeft={3}
            sx={{ background: "#E4E4E5" }}
          >
            <FaceIcon sx={{ fontSize: 30 , color:'#F19528'}} />
            <p className="centertext">ชนาวัฒน์ ทั้วสุภาพ</p>
          </Grid>
        </Card>
      </Box>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "75%",
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 10,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingLeft={3}
            sx={{ background: "#E4E4E5" }}
          >
            <FaceIcon sx={{ fontSize: 30, color:'#F19528' }} />
            <p className="centertext">เมธาศักดิ์ ทิพย์กองลาศ</p>
          </Grid>
        </Card>
      </Box>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "75%",
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 10,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingLeft={3}
            sx={{ background: "#E4E4E5" }}
          >
            <FaceIcon sx={{ fontSize: 30 , color:'#F19528'}} />
            <p className="centertext">นัฏฐวัฒน์ สิงห์อินทร์</p>
          </Grid>
        </Card>
      </Box>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "75%",
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 10,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingLeft={3}
            sx={{ background: "#E4E4E5" }}
          >
            <FaceIcon sx={{ fontSize: 30 , color:'#F19528'}} />
            <p className="centertext">อิฟฟาฮาน สุขสุวรรณ</p>
          </Grid>
        </Card>
      </Box>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "75%",
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 10,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            paddingLeft={3}
            sx={{ background: "#E4E4E5" }}
          >
            <FaceIcon sx={{ fontSize: 30 , color:'#F19528' }} />
            <p className="centertext">ธรรมาธิป ชิตพงศ์</p>
          </Grid>
        </Card>
      </Box>
    </div>
  );
}

export default ClassMember;
