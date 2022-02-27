import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Login() {
  return (
    <html class="html-log">
      <body class="background-log">
        <div class="login-page">
          <div class="logo">
            <img src="https://www.img.in.th/images/f4de721891268e159ad5acd5b6a7a64d.png" alt="logorabbit" ></img>
          </div>
          <div class="form">
            <form class="login-form">
              <h1 class='head'>ลงชื่อเข้าใช้งาน</h1>
              <Stack spacing={3} paddingBottom={2}>
              <TextField
                id="outlined-basic"
                label="ชื่อบัญชี" 
                variant="outlined" 
                inputProps={{style:{fontFamily:"Prompt"}}}
                InputLabelProps={{style:{fontFamily:"Prompt"}}}
                required 
              />
              <TextField 
                id="outlined-basic" 
                type="password" 
                label="รหัสผ่าน" 
                variant="outlined" 
                inputProps={{style:{fontFamily:"Prompt"}}}
                InputLabelProps={{style:{fontFamily:"Prompt"}}}
                required 
              />
              </Stack>
              <Link to="/">
                <button type="login">เข้าสู่ระบบ</button>
              </Link>
              <p>
                <Link to="/register">
                  <button type="register">สร้างบัญชีใหม่</button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Login