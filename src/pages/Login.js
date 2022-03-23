import React from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Loginlogo from "../Static/image/Rabbitquiz_05.png";

//authentic
import { ax, useAuth } from "../auth/auth";
import { message } from "antd";
import "antd/dist/antd.css";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  // const [userResultList, setUserResultList] = useState([])
  // const [loginconst, setLoginconst] = useState()
  const [namefill, setNamefill] = useState("");
  const [passfill, setPassfill] = useState("");
  const userdata = {
    username: namefill,
    password: passfill,
  };

  const [showLoginError, setShowLoginError] = useState(false);
  const [showLoginEmpty, setShowLoginEmpty] = useState(false);
  const navigate = useNavigate();

  const auth = useAuth();
  const loginpress = async () => {
    await localStorage.clear()
    console.log("Username:", namefill);
    console.log("Password:", passfill);
    await auth.signin(userdata, (response) => {
      if (response === "valid username or password.") {
        setShowLoginError(true);
        setShowLoginEmpty(false);

      } else if (response === "some field is blank.") {
        setShowLoginError(false);
        setShowLoginEmpty(true);

      } else if (typeof response != String) {
        message.success({
          content: "ลงชื่อเข้าใช้สำเร็จ",
          style: { fontFamily: "Prompt", marginTop: 20, fontSize: "20px" },
          duration: 3
        });

        console.log("Login successfully...");
        if (response.is_staff === true) { navigate("/teacher", { replace: true }); }
        if (response.is_staff === false) { navigate("/", { replace: true }); }
      }
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <html className="bodybackground">
      <header className="App-header">
        <div class="login-page">
          <div class="logo">
            <img src={Loginlogo} alt="logorabbit"></img>
          </div>
          <div class="form">
            <form class="login-form">
              <h1 class="head">ลงชื่อเข้าใช้งาน</h1>
              <Stack spacing={3} paddingBottom={2} className="text-field">
                {showLoginError ? (
                  <div className="login-error">
                    ชื่อบัญชีหรือรหัสผ่านของคุณไม่ถูกต้อง<div>กรุณาลองใหม่</div>{" "}
                  </div>
                ) : null}
                {showLoginEmpty ? (
                  <div className="login-error">
                    กรุณากรอกชื่อบัญชีและรหัสผ่านให้ครบเพื่อเข้าสู่ระบบ{" "}
                  </div>
                ) : null}
                <TextField
                  id="outlined-basic"
                  label="ชื่อบัญชี"
                  variant="outlined"
                  onChange={(event) => setNamefill(event.target.value)}
                  inputProps={{ style: { fontFamily: "Prompt" } }}
                  InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                />
                <TextField
                  id="outlined-basic"
                  type={visible ? 'text' : 'password'}
                  label="รหัสผ่าน"
                  variant="outlined"
                  onChange={(event) => setPassfill(event.target.value)}
                  InputProps={{
                    style: { fontFamily: "Prompt" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleVisibility}>
                          {visible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                />

              </Stack>

              <Stack spacing={2}>
                <Button
                  variant="contained"
                  style={{ height: 50, background: "#1976D2" }}
                  onClick={loginpress}
                >
                  <div className="register">เข้าสู่ระบบ</div>
                </Button>

                <Button
                  variant="contained"
                  style={{ height: 50, background: "#56d35b" }}
                  to="/register"
                  component={Link}
                >
                  <div className="register">สร้างบัญชีผู้ใช้</div>
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </header>
    </html>
  );
}

export default Login;
