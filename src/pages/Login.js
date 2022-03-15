import React from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ax from "../config/ax";
import { useEffect, useState } from "react";

function Login() {



  // const [userResultList, setUserResultList] = useState([])
  // const [loginconst, setLoginconst] = useState()
  const [namefill, setNamefill] = useState('')
  const [passfill, setPassfill] = useState('')

  const body = {
    username: { namefill },
    password: { passfill },
  };

  const [showError, setShowError] = React.useState(false)
  const history = useHistory();
  const loginpress = async () => {
    console.log(namefill)
    console.log(passfill)
    try{
      let LoginResult = await ax.post('/auth/login/',{
        username: namefill,
        password: passfill,
      });
          console.log('login success')
          console.log(LoginResult.data)
          history.push('/')

    } catch (error) {
      if (error.response.data.detail == "No active account found with the given credentials");
        console.log("ไม่พบชื่อบัญชีที่ใช้งานอยู่หรือรหัสผ่านไม่ถูกต้อง")
        setShowError(true)
      }
    }

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
              <Stack spacing={3} paddingBottom={2} className="text-field">
                {showError ? <div class="login-error">ชื่อบัญชีหรือรหัสผ่านที่คุณได้กรอกไว้ไม่ถูกต้อง</div> : null}
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