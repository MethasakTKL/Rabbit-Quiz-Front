import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import "./EditProfilePopup.css";
import SaveIcon from "@mui/icons-material/Save";
import RegexTextField from "../RegexTextField";
import { ax, useAuth } from "../../auth/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import ReportIcon from "@mui/icons-material/Report";




function Leaveroom() {
  let auth = useAuth()
  let id = localStorage.getItem("classid")
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const key = 'updatable';
  let navigate = useNavigate()
  const handleLeave = async () => {
    var res = await ax.post(`/leave/${id}`)
    let resp = await ax.get(`/classroom/${id}`)
    let roomname = resp.data.classroomName
    console.log(`You have alreay exit the room ${roomname}`)
    setOpen(false);
    message.loading({
      content: 'คุณกำลังออกจากห้องเรียน...',
      style: { fontFamily: "Prompt", marginTop: 200, fontSize: "20px" },
      key
    });
    setTimeout(() => {
      message.warn({
        content: `คุณได้ออกจากห้องเรียน ${roomname}`,
        style: { fontFamily: "Prompt", marginTop: 200, fontSize: "20px" },
        key,
        duration: 2,
      });
      navigate('/', { replace: true })
    }, 2000);
  }


  return (
    <div>
      <Button
        variant="contained"
        sx={{ borderRadius: 3, width: 80 }}
        style={{ background: "#E7E6E5" }}
        onClick={handleClickOpen}
      >
        <LogoutIcon sx={{ color: "#5F498C" }} />
        <div className="leave">ออก</div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Stack direction="row" justifyContent="center">
              <Box>
                <ReportIcon sx={{ fontSize: 96, color: "#7D0000" }} />
              </Box>
            </Stack>
            <div className="textleave">ต้องการออกจากห้องเรียนนี้ใช่หรือไม่</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <div className="answer1">ยกเลิก</div>
          </Button>
          <Button
            variant="contained"
            style={{ background: "#7D0000" }}
            sx={{ width: 150 }}
            onClick={handleLeave}
          >
            <div className="answer2">ใช่</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Leaveroom;
