import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React, { useEffect, useState }  from "react";
import "./ClassMember.css";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth, ax } from "../auth/auth";



function ClassMember() {
  let auth = useAuth()
  let id = auth.id
  console.log(id)

  const [classroomName, setClassroomName] = useState(null)

  useEffect(() => {
    async function fetchClassroom() {
      let res = await ax.get(`/classroom/${id}`)
      console.log(res.data.classroomName)
      setClassroomName(res.data.classroomName)
    } fetchClassroom();
  }, [])

  return (
    <div>
      <h1 className="classname" style={{ fontSize: 36 }}>
        ห้องเรียน{classroomName}
      </h1>
      {/* <Stack direction="row" justifyContent="center">
        <Paper
          className="membertopic"
          variant="contained"
          sx={{
            borderRadius: 3,
            width: 150,
            height: 40,
          }}
          style={{ background: "#F19528" }}
        >
          <h3 className="center" style={{ paddingLeft: "25%", paddingTop: 5 }}>
            สมาชิก
          </h3>
        </Paper>
      </Stack> */}
      {/* // Mockup data----------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#7c6aa1",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack direction="row" justifyContent="space-between">
          <Grid>
            <div className="texttitle1">คุณครู</div>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
          paddingBottom:2
        }}
        className="boxtitle"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid>
            <AccountCircleIcon sx={{fontSize:32,color:"#F19528"}}/>
          </Grid>
          <Grid>
            <div className="namestudent">อารีย์ มีสุข</div>
          </Grid>
        </Stack>
      </Box>
      
      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#7c6aa1",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack direction="row" justifyContent="space-between">
          <Grid>
            <div className="texttitle1">เพื่อนร่วมชั้น</div>
          </Grid>
          <Grid>
            <div className="texttitle2">ทั้งหมด 5 คน</div>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#e8dcff",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid>
            <FaceIcon sx={{fontSize:32,color:"#F19528"}}/>
          </Grid>
          <Grid>
            <div className="namestudent">ชนาวัฒน์ ทั้วสุภาพ</div>
          </Grid>
        </Stack>
      </Box>


      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#e8dcff",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid>
            <FaceIcon sx={{fontSize:32,color:"#F19528"}}/>
          </Grid>
          <Grid>
            <div className="namestudent">นัฏฐวัฒน์ สิงห์อินทร์</div>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#e8dcff",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid>
            <FaceIcon sx={{fontSize:32,color:"#F19528"}}/>
          </Grid>
          <Grid>
            <div className="namestudent">เมธาศักดิ์ ทิพย์กองลาศ</div>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#e8dcff",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid>
            <FaceIcon sx={{fontSize:32,color:"#F19528"}}/>
          </Grid>
          <Grid>
            <div className="namestudent">อิฟฟาฮาน สุขสุวรรณ</div>
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          borderBottom: 2,
          borderColor:"#e8dcff",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 3,
        }}
        className="boxtitle"
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid>
            <FaceIcon sx={{fontSize:32,color:"#F19528"}}/>
          </Grid>
          <Grid>
            <div className="namestudent">ธรรมาธิป ชิตพงศ์</div>
          </Grid>
        </Stack>
      </Box>

      
    </div>
  );
}

export default ClassMember;
