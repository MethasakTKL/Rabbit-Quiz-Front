import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import './EditProfilePopup.css';
import SaveIcon from '@mui/icons-material/Save';
import { Input } from "antd";
import RegexTextField from "./RegexTextField";


function EditProfilePopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const onlyAlpha = /[^ก-๛]/gi;

  return (
    <div>
      <Button
        variant="contained"
        style={{ background: "#F19528" }}
        onClick={handleClickOpen}
      >
        <div className="buttonAdd">แก้ไขข้อมูลส่วนตัว</div>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>

          <div className="edit-profile">แก้ไขข้อมูลส่วนตัว</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Prompt" }}>
            - ต้องกรอกทั้งชื่อและนามสกุลที่ต้องการ เพื่อแก้ไขข้อมูล
          </DialogContentText>
          <DialogContentText sx={{ fontFamily: "Prompt" }}>
            - ชื่อและนามสกุลต้องเป็นภาษาไทยเท่านั้น
          </DialogContentText>
          <p />
          <RegexTextField
            id="firstname"
            autoFocus
            fullWidth
            variant="standard"
            label="ชื่อที่ต้องการเปลี่ยน"
            regex={onlyAlpha}
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <p />

          <RegexTextField
            id="surname"
            autoFocus
            fullWidth
            variant="standard"
            label="นามสกุลที่ต้องการเปลี่ยน"
            regex={onlyAlpha}
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
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
            sx={{ fontFamily: "Prompt", color: "white", width: 100 }}
          >

            <div className="saveButtonIcon"><SaveIcon /></div>
            <div className="saveButton">บันทึก</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function EditEmailPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fullWidth, setFullWidth] = React.useState(true);
  return (
    <div>
      <Button
        variant="contained"
        style={{ background: "#F19528" }}
        onClick={handleClickOpen}
      >
        <div className="buttonAdd">แก้ไขที่อยู่อีเมล</div>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="edit-profile">แก้ไขที่อยู่อีเมล</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Prompt", width: 400 }}>
            กรอกที่อยู่อีเมลใหม่ที่ต้องการจะเปลี่ยน
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="nameclass"
            label="อีเมล"
            type="email"
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
            sx={{ fontFamily: "Prompt", color: "white", width: 100 }}

          >
            <div className="saveButtonIcon"><SaveIcon /></div>
            <div className="saveButton">บันทึก</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { EditProfilePopup, EditEmailPopup };
