import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import "./Home.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import classIMG from "../Static/image/Classroomimg.jpg";
import { ax, useAuth } from "../auth/auth";
import { useLocation, useNavigate } from "react-router";
import { message } from "antd";

function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [userFirstName, setUserFirstName] = useState('')
  useEffect(() => {    // <---- ใช้ useEffect async fucntion เพื่อลดการเรียกใช้ fetchData
    async function fetchData() {
      const response = await ax.get('/userdetail')
      setUserFirstName(response.data.first_name)
      console.log('Fetch data for home success...')
    }
    fetchData();
  }, []);

  let navigate = useNavigate()
  const [classCode, setClassCode] = useState('')
  const [error, setError] = useState()
  const handleAddClass = async () => {
    try {
      var result = await ax.post('/join', { classCode })
      if (result.status === 200 && result.data) {
        console.log(`Successfully joined classroom...`)
        setOpen(false)
        navigate('/reload', { replace: true })
        navigate('/', { replace: true })
        message.success({
          content: "เข้าร่วมห้องเรียนสำเร็จ",
          style: { fontFamily: "Prompt", marginTop: 20, fontSize: "20px" },
          duration: 3
        });
      }
    } catch (error) {
      setOpen(false)
      message.error({
        content: "รหัสห้องเรียนนี้ไม่สามารถเข้าร่วมได้ กรุณาลองใหม่",
        style: { fontFamily: "Prompt", marginTop: 140, fontSize: "20px" },
        duration: 3
      });

      console.error(error)
    }
  }
  // setError(true)


  return (
    <div>
      <h4 className="hello">สวัสดี, {userFirstName}</h4>
      {/* เพิ่มห้องเรียน */}
      <Button
        variant="outlined"
        sx={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Prompt",
        }}
        onClick={handleClickOpen}
      >
        <FiPlus /> ห้องเรียน
      </Button>
      <Dialog open={open} onClose={handleClose} sx={{ marginBottom: "200px" }}>
        <DialogTitle sx={{ fontFamily: "Prompt" }}>เพิ่มห้องเรียน</DialogTitle>
        {error &&
          <error>รหัสห้องเรียนนี้ไม่สามารถเข้าได้<br />กรุณาลองใหม่</error>}
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="รหัสห้องเรียน"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            type="name"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={classCode === ''}
            onClick={handleAddClass}
            sx={{ fontFamily: "Prompt", color: "white" }}
            variant="contained"
          >
            เพิ่ม
          </Button>
          <Button onClick={handleClose} sx={{ fontFamily: "Prompt" }}>
            ยกเลิก
          </Button>
        </DialogActions>
      </Dialog>
      {/* เพิ่มห้องเรียน */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "90%",
            maxWidth: 1000,
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
                      to="/classroom"

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

export default Home;
