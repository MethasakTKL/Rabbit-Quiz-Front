import React from "react";
import "./ConfirmDeleteClass.css"
import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReportIcon from "@mui/icons-material/Report";
import { ax } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { message } from "antd";


function ConfirmDeleteClass() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const key = 'updatable';
  const handleDeleteRoom = () => {
    ax.post(`deleteClassroom/${localStorage.getItem('classid')}`)
    setOpen(false)
    message.loading({
      content: 'กำลังลบห้องเรียน...',
      style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
      key
    });
    setTimeout(() => {
      message.warn({
        content: "ห้องเรียนได้ถูกลบแล้ว",
        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
        key,
        duration: 2,
      });
    }, 3000);
    setTimeout(() => { navigate("/", { replace: true }) }, 3000);
  }


  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{ background: "#c94444", width: 120 }}>
        <div>
          <div className="buttonaction">ลบห้องเรียน</div>
        </div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Stack direction="row" justifyContent="center">
              <Box>
                <ReportIcon sx={{ fontSize: 96, color: "#7D0000" }} />
              </Box>
            </Stack>
            <div className="textleave">ต้องการลบห้องเรียนนี้ใช่หรือไม่</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDeleteRoom}
            variant="contained"
            style={{ background: "#7D0000" }}
            sx={{ width: 80 }}
          >
            <div className="answer2">ใช่</div>
          </Button>
          <Button onClick={handleClose}>
            <div className="answer1">ยกเลิก</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDeleteClass;
