import React, { useEffect, useState } from "react";
import "./ClassSetting.css";
import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import ConfirmDeleteClass from "../components/Popup/ConfirmDeleteClass";
import { useAuth, ax } from "../auth/auth";


function ClassSetting() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let id = localStorage.getItem("classid");
  const [classroomName, setClassroomName] = useState(null);
  const [classroomID, setClassroomID] = useState(null)

  useEffect(() => {
    async function fetchClassroom() {
      let res = await ax.get(`classroom/${id}`);
      console.log(res.data);
      setClassroomName(res.data.classroomName);
      setClassroomID(res.data.classCode);
    }
    fetchClassroom();
  }, []);


  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <SettingsIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="Titlesetting">ตั้งค่าห้องเรียน</div>
        </DialogTitle>
        <DialogContent>
          <div className="TitleForm">
            คุณสามารถเปลี่ยนชื่อห้องเรียนและรหัสห้องเรียนได้
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ชื่อห้องเรียน"
            value={classroomName}
            onChange={(e) => setClassroomName(e.target.value)}
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="รหัสห้องเรียน"
            value={classroomID}
            onChange={(e) => setClassroomID(e.target.value)}
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
        </DialogContent>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{
            paddingBottom: 2,
            paddingTop: 3,
          }}
        >
          <Grid>
            <ConfirmDeleteClass />
          </Grid>
          <Grid>
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ width: 120, background: "#1976D2" }}
            >
              <div className="buttonaction">บันทึก</div>
            </Button>
          </Grid>
        </Stack>
      </Dialog>
    </div>
  );
}

export default ClassSetting;
