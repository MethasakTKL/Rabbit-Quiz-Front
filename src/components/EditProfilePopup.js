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
import './EditProfilePopup.css';
import SaveIcon from '@mui/icons-material/Save';
import RegexTextField from "./RegexTextField";
import { ax, useAuth } from "../auth/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


function EditProfilePopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /////// Get data for Default Profile /////////
  const onlyAlpha = /[^ก-๛]/gi;
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  useEffect(() => {    // <---- ใช้ useEffect async fucntion เพื่อลดการเรียกใช้ fetchData
    async function fetchData() {
      const response = await ax.get('/userdetail')
      setFirstName(response.data.first_name)
      setLastName(response.data.last_name)
    }
    fetchData();
  }, []);


  ////// Change Profie Section ///////
  const navigate = useNavigate()
  const handleEditName = async () => {
    try {
      var result = await ax.post('/changeProfile', {
        "first_name": firstname,
        "last_name": lastname,
      })
      if (result.status === 200 && result.data) {
        console.log(`Changed fullname successfully...`)
        handleClose()
        navigate('/', { replace: true })
        navigate('/profile', { replace: true })
        message.success({
          content: "เปลี่ยนแปลงชื่อนามสกุลสำเร็จ",
          style: { fontFamily: "Prompt" },
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

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
          <DialogContentText sx={{ fontFamily: "Prompt", color: "#231F20" }}>
            {" "}ชื่อและนามสกุลต้องเป็นภาษาไทยเท่านั้น
          </DialogContentText>
          <p />
          <RegexTextField
            id="firstname"
            autoFocus
            fullWidth
            variant="standard"
            label="ชื่อ"
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
            label="นามสกุล"
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
            onClick={handleEditName}
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
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const auth = useAuth()
  const navigate = useNavigate()
  const [userNewEmail, setUserNewEmail] = useState();
  useEffect(() => {    // <---- ใช้ useEffect async fucntion เพื่อลดการเรียกใช้ fetchData
    async function fetchData() {
      const response = await ax.get('/userdetail')
      await setUserNewEmail(response.data.email)
    }
    fetchData();
  }, []);


  const handleEditEmail = async () => {
    try {
      var result = await ax.post('/changeEmail', {
        "email": userNewEmail
      })
      if (result.status === 200 && result.data) {
        auth.user.email = userNewEmail
        console.log(`Changed email successfully...`)
        handleClose()
        navigate('/', { replace: true })
        navigate('/profile', { replace: true })
        message.success({
          content: "เปลี่ยนแปลงที่อยู่อีเมลสำเร็จ",
          style: { fontFamily: "Prompt" },
        })
      }
    } catch (error) {
      console.error(error)
    }
  }


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
            value={userNewEmail}
            onChange={(e) => setUserNewEmail(e.target.value)}
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
            onClick={handleEditEmail}
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
