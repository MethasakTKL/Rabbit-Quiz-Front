import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import "./Home_Teacher.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import kid from "../Static/image/kid.png";

function Home_Teacher() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h4 className="hello">สวัสดี, อารีย์ มีสุข</h4>
      {/* เพิ่มห้องเรียน */}
      <Button
        variant="outlined"
        sx={{
          display: "block",
          marginLeft:'auto',
          marginRight:'auto',
          fontFamily: "Prompt",
        }}
        onClick={handleClickOpen}
      >
        <FiPlus /> สร้างห้องเรียน
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: "Prompt" }}>สร้างห้องเรียน</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nameclass"
            label="ชื่อห้องเรียน"
            type="name"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="codeclass"
            label="รหัสห้องเรียน"
            type="name"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontFamily: "Prompt" }}>
            ยกเลิก
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ fontFamily: "Prompt", color: "white" }}
          >
            สร้าง
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
            height: 220,
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
          <Box>
            <Button
              style={{
                display: "flex",
                background: "linear-gradient(135deg, #33C58E 20%, #63FD88 90%)",
                marginRight: "auto",
                marginLeft: "auto",
                bottom: 10,
              }}
              variant="contained"
              sx={{ width: "90%", height: 100, borderRadius: 3 }}
              to="/classroom-teacher"
              component={Link}
            >
              <typography>
                <h1 className="roomname">240-124 การเกษตร</h1>
              </typography>
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default Home_Teacher;
