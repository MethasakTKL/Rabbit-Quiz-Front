import React from 'react'
import "./Login.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import Loginlogo from '../Static/image/Rabbitquiz_05.png'

//authentic
import { ax, useAuth } from "../auth/auth";
import { message } from "antd";
import "antd/dist/antd.css";

function Login() {


  // const [userResultList, setUserResultList] = useState([])
  // const [loginconst, setLoginconst] = useState()
  const [namefill, setNamefill] = useState('')
  const [passfill, setPassfill] = useState('')
  const userdata = {
    username: namefill,
    password: passfill,
  }

  const [showLoginError, setShowLoginError] = useState(false)
  const [showLoginEmpty, setShowLoginEmpty] = useState(false)
  const navigate = useNavigate();

  const auth = useAuth()
  const loginpress = async () => {
    console.log("Username:", namefill)
    console.log("Password:", passfill)
    await auth.signin(userdata, (response) => {
      if (response === "valid username or password.") {
        setShowLoginError(true)
        setShowLoginEmpty(false)
      }
      else if (response === "some field is blank.") {
        setShowLoginError(false)
        setShowLoginEmpty(true)
      }
      else if (typeof response != String) {
        message.success({ content: "ลงชื่อเข้าใช้สำเร็จ", style: { fontFamily: "Prompt" } })
        console.log("Login successfully.")
        navigate("/", { replace: true });
      }
    })
  }

  return (
    <html class="html-log">
      <body class="background-log">
        <div class="login-page">
          <div class="logo">
            <img src={Loginlogo} alt="logorabbit" ></img>
          </div>
          <div class="form">
            <form class="login-form">
              <h1 class='head'>ลงชื่อเข้าใช้งาน</h1>
              <Stack spacing={3} paddingBottom={2} className="text-field">
                {showLoginError ? <div className='login-error'>ชื่อบัญชีหรือรหัสผ่านของคุณไม่ถูกต้อง<div>กรุณาลองใหม่</div>  </div> : null}
                {showLoginEmpty ? <div className='login-error'>กรุณากรอกชื่อบัญชีและรหัสผ่านให้ครบเพื่อเข้าสู่ระบบ </div> : null}
                <TextField
                  id="outlined-basic"
                  label="ชื่อบัญชี"
                  variant="outlined"
                  onChange={event => setNamefill(event.target.value)}
                  inputProps={{ style: { fontFamily: "Prompt" } }}
                  InputLabelProps={{ style: { fontFamily: "Prompt" } }}

                />
                <TextField
                  id="outlined-basic"
                  type="password"
                  label="รหัสผ่าน"
                  variant="outlined"
                  onChange={event => setPassfill(event.target.value)}
                  inputProps={{ style: { fontFamily: "Prompt" } }}
                  InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                />
              </Stack>
              <button type="button" className='login' onClick={loginpress}>เข้าสู่ระบบ</button>
              <p></p>
              <button type="button" className='register'>สร้างบัญชีใหม่</button>
            </form>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Login