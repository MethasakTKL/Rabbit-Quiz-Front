import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React,{useState} from "react";
import './addmember.css'
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function AddMember() {
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
        style={{ background: "#F19528", width: 150 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
        <div className="buttonAdd">เพิ่มสมาชิก</div>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          
          <div className="addmember">เพิ่มสมาชิก</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Prompt" }}>
            กรุณากรอกอีเมลเพื่อเพิ่มสมาชิกเข้าสู่ห้องเรียน
          </DialogContentText>
          <error>ไม่พบผู้ใช้สำหรับอีเมลนี้ในระบบ กรุณาลองใช้ชื่อบัญชีอื่น</error>

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
            เพิ่ม
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddMember;
