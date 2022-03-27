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
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


function ClassSetting() {
  const [open, setOpen] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenSetting(false)
  };
  const handleOpenSetting = () => {
    setOpenSetting(true);
  };
  const handleOpenDelete = () => {
    setOpenDelete(true);
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const handleChangeRoom = () => {
    ax.post('changeClass', {
      className: classroomName,
      teacher: localStorage.getItem("id_username"),
      classCode: classroomID
    })
  }
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ fontFamily: "Prompt", color: "grey" }}
      >

        <SettingsIcon style={{ color: "#fffffhh" }} /> แก้ไข
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ margin: "-20px 0 0 20px" }}
      >
        <MenuItem onClick={handleOpenSetting}>
          <Button variant="contained" onClick={handleOpenSetting} style={{ background: "#5F498C", width: 120 }}>
            <div>
              <div className="buttonaction">ตั้งค่าห้องเรียน</div>
            </div>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleOpenDelete}>
          <Grid>
            <ConfirmDeleteClass />
          </Grid>
        </MenuItem>
      </Menu>

      <Dialog open={openSetting} onClose={handleClose}>
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
            inputProps={{ style: { fontFamily: "Prompt", color: "black" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt", color: "grey" } }}
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
            inputProps={{ style: { fontFamily: "Prompt", color: "black" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt", color: "grey" } }}
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
            <Button
              variant="contained"
              onClick={handleChangeRoom}
              style={{ width: 120, background: "#5F498C" }}
            >
              <div className="buttonaction">บันทึก</div>
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ width: 120, background: "grey" }}
            >
              <div className="buttonaction">ยกเลิก</div>
            </Button>
          </Grid>
        </Stack>
      </Dialog>
    </div >
  );
}

export default ClassSetting;
