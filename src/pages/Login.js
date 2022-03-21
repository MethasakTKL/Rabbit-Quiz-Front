import React from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import Loginlogo from '../Static/image/Rabbitquiz_05.png'

//authentic
import { ax, useAuth } from "../auth/auth";


function Login() {


  // const [userResultList, setUserResultList] = useState([])
  // const [loginconst, setLoginconst] = useState()
  const [namefill, setNamefill] = useState('')
  const [passfill, setPassfill] = useState('')

  const [showLoginError, setShowLoginError] = useState(false)
  const [showLoginEmpty, setShowLoginEmpty] = useState(false)
  const history = useHistory();

  const auth = useAuth()
  const loginpress = async () => {
    console.log(namefill)
    console.log(passfill)
    try {
      var result = await ax.post('/auth/login/', {
        username: namefill,
        password: passfill,
      })
      let authToken = result.data
      if (result.status === 200 && result.data) {
        console.log('login complete...')
        auth.signin(authToken, () => {
          history.push("/", { replace: true })
          console.log("Successfully navigate to home")
        })
      }
    }
    catch (error) {
      if (error.response) {
        if (error.response.data.detail === "No active account found with the given credentials") {
          console.log("ไม่พบชื่อบัญชีที่ใช้งานอยู่หรือรหัสผ่านไม่ถูกต้อง")
          setShowLoginError(true)
          setShowLoginEmpty(false)
        }
         if (namefill === '' || passfill === '') {
          setShowLoginEmpty(true)
          setShowLoginError(false)
        }
      }
    }
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
                {showLoginError ? <div class="login-error">ชื่อบัญชีหรือรหัสผ่านของคุณไม่ถูกต้อง<div>กรุณาลองใหม่</div>  </div> : null}
                {showLoginEmpty ? <div class="login-error">กรุณากรอกชื่อบัญชีและรหัสผ่านให้ครบเพื่อเข้าสู่ระบบ </div> : null}
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
              <Link>
                <button type="login" onClick={loginpress}>เข้าสู่ระบบ</button>
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