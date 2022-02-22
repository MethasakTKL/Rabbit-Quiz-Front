import { Button, Box, Paper } from "@mui/material";
import React from "react";
import "./ClassMember.css";
import Card from '@mui/material/Card';

function ClassMember() {
  return (
    <div>
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        ห้องเรียน 240-124
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
        <h3 className="center" style={{ paddingLeft: "30%",paddingTop:5}}>สมาชิก</h3>
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
        <Card variant="contained" style={{ background: "#CACACE"}} sx={{borderRadius:4}}>
          <p className="centertext">นายชนาวัฒน์ ทั้วสุภาพ</p>
        </Card>
      </Box>
      <Box
        sx={{
            width: "80%",
            height: 40,
            borderRadius: 20,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 6,
        }}
      >
        <Card variant="contained" style={{ background: "#CACACE"}} sx={{borderRadius:4}}>
          <p className="centertext">นายเมธาศักดิ์ ทิพย์กองลาศ </p>
        </Card>
      </Box>
      <Box
        sx={{
            width: "80%",
            height: 40,
            borderRadius: 20,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 9,
        }}
      >
        <Card variant="contained" style={{ background: "#CACACE"}} sx={{borderRadius:4}}>
          <p className="centertext">นายชนาวัฒน์ ทั้วสุภาพ</p>
        </Card>
      </Box>
    </div>
  );
}

export default ClassMember;
