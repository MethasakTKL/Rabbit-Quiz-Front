import "./Register.css";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography, Grid, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ax from "../config/ax";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";


function Register() {
  const [open, setOpen] = React.useState(false);
  const handleClickClose = () => { setOpen(false) };

  const [namefill, setNamefill] = useState('')
  const [passfill, setPassfill] = useState('')
  const [pass2fill, setPass2fill] = useState('')
  const [stafffill, setStafffill] = useState('')
  const [emailfill, setEmailfill] = useState('')
  const [firstnamefill, setFirstnamefill] = useState('')
  const [surnamefill, setSurnamefill] = useState('')

  const registpress = async () => {
    setOpen(true) 
    console.log(namefill)
    console.log(passfill)
    console.log(stafffill)
    console.log(emailfill)
    console.log(firstnamefill)
    console.log(surnamefill)

    let result = await ax.post('/auth/register/',{
      username: namefill,
      password: passfill,
      password2: pass2fill,
      is_staff: stafffill,
      email: emailfill,
      first_name: firstnamefill,
      last_name: surnamefill,

    })
        console.log('Register success')
        console.log(result.data)
    }

  return (
    <html>
      <body class="background-reg">
        <div class="register-page">
          <div class="logo">
            <logo>
              <img
                src="https://www.img.in.th/images/f4de721891268e159ad5acd5b6a7a64d.png"
                alt="logorabbit"
              />
            </logo>
          </div>
          <div class="form">
            <h1 class="head">สร้างบัญชีใหม่</h1>
            <Stack spacing={1} paddingBottom={2}>
              <TextField
                id="name"
                label="ชื่อ"
                variant="outlined"
                onChange={event => setFirstnamefill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="lastname"
                label="นามสกุล"
                variant="outlined"
                onChange={event => setSurnamefill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="username"
                label="ชื่อบัญชี"
                variant="outlined"
                onChange={event => setNamefill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="email"
                label="อีเมล"
                variant="outlined"
                onChange={event => setEmailfill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="password"
                type="password"
                label="รหัสผ่าน"
                variant="outlined"
                onChange={event => setPassfill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="password-confirm"
                type="password"
                label="ยืนยันรหัสผ่าน"
                variant="outlined"
                onChange={event => setPass2fill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
            </Stack>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <div className="accounttype">ประเภทบัญชีผู้ใช้</div>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  onClick={() => setStafffill('False')}
                  control={<Radio />}
                  label={<Typography className="choices" sx={{ fontFamily: "Prompt" }}>นักเรียน</Typography>}
                />
                <FormControlLabel
                  value="male"
                  onClick={() => setStafffill('True')}
                  control={<Radio />}
                  label={<Typography className="choices" sx={{ fontFamily: "Prompt" }}>คุณครู</Typography>}
                />
              </RadioGroup>
            </FormControl>
            <p>
              <button type="register" onClick={registpress} >สร้างบัญชี</button>
            </p>
            <div class="text-backtologin">
              มีบัญชีอยู่แล้วใช่ไหม
              <Link to="/login">
                <button type="backtologin">เข้าสู่ระบบ</button>
              </Link>
            </div>
            <Dialog open={open} onClose={handleClickClose}>
              <DialogTitle>
                <Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="reg-header-congrat">สร้างบัญชีเสร็จสิ้น</div>
                    <IconButton sx={{ display: 'flex' }}>
                      <CloseIcon onClick={handleClickClose} />
                    </IconButton>
                  </Box>
                </Grid>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div className="reg-congrat">ยินดีด้วยคุณได้สร้างบัญชีเสร็จเรียบร้อยแล้ว</div>
                </DialogContentText>
              </DialogContent>
              <Grid>
                <Box sx={{display: "flex"}}>
                  <div
                    className="reg-close"
                    onClick={handleClickClose}>ปิด
                  </div>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="reg-login">เข้าสู่ระบบ
                    </div>
                  </Link>
                </Box>
              </Grid>
            </Dialog>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Register;
