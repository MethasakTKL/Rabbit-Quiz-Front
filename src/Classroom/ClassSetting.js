import React from "react";
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

function ClassSetting() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            defaultValue="รอดึงข้อมูล"
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
            defaultValue="รอดึงข้อมูล"
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
              paddingBottom:2,
              paddingTop:3
            }}
          >
            <Grid>
              <ConfirmDeleteClass />
            </Grid>
            <Grid>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{ width: 200,background:"#1976D2" }}
              >
                บันทึก
              </Button>
            </Grid>
          </Stack>
      </Dialog>
    </div>
  );
}

export default ClassSetting;
