import React, { useEffect, useState } from "react";
import { Box, Button, Paper,Stack, TextField } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import "./Home_Teacher.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import kid from "../Static/image/kid.png";
import CreateClassRoomPopup from "../components/Popup/CreateClassRoomPopup";
import { ax, useAuth } from "../auth/auth";
import classIMG from "../Static/image/Classroomimg.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


function Home_Teacher() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [userFirstName, setUserFirstName] = useState("");
  const [userIsStaff, setUserIsStaff] = useState("");
  const [userClassRoom, setUserClassRoom] = useState();

  let timeout;
  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      async function fetchData() {
        const response = await ax.get("/userdetail");
        setUserFirstName(response.data.first_name);
        setUserIsStaff(response.data.is_staff);
        console.log("Fetch data for home success...");

        const classRoom = await ax.get("/getUserClassroom");
        setUserClassRoom(classRoom);
        console.log(classRoom.data.length);
        console.log(classRoom.data);

        const res = await ax.get("/myclass");
        console.log(res.data);
      }
      fetchData();
    }, 0); // <---- ใช้ useEffect async fucntion เพื่อลดการเรียกใช้ fetchData
  }, []);

  return (
    <div>
      <h4 className="hello">สวัสดี,คุณครู{userFirstName}</h4>
      {/* สร้างห้องเรียน */}
      <CreateClassRoomPopup />
      {/* สร้างห้องเรียน */}
      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={3}>
          <typography>
            <h1 className="titleclass" sx={{}}>
              ห้องเรียน <ClassIcon sx={{ fontSize: "50" }} />
            </h1>
          </typography>
          <Stack sx={{ paddingBottom: 5 }}>
            <Box>
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 500,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingBottom: 2,
                }}
                elevation={5}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={classIMG}
                  alt="green iguana"
                />
                <CardContent>
                  <div className="cardcontent">ห้องเรียนการเกษตร</div>
                </CardContent>
                <CardActions>
                  <Box sx={{ marginLeft: "auto", paddingRight: 1.5 }}>
                    <Button
                      variant="contained"
                      sx={{ width: 200, height: 50 }}
                      component={Link}
                      to="/classroom-teacher"
                    >
                      <div className="roomname">เข้าห้องเรียน</div>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}

export default Home_Teacher;
