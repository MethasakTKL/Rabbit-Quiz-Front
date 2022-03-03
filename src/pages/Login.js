import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ax from "../config/ax";
import { useEffect, useState } from "react";
import logo from "../Static/image/Rabbitquiz_05.png";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function Login() {
  // const [userResultList, setUserResultList] = useState([])
  // const [loginconst, setLoginconst] = useState()
  const [namefill, setNamefill] = useState("");
  const [passfill, setPassfill] = useState("");

  const body = {
    username: { namefill },
    password: { passfill },
  };

  const loginpress = async () => {
    console.log(namefill);
    console.log(passfill);
    let result = await ax.post("/auth/login/", {
      username: namefill,
      password: passfill,
    });
    console.log("login success");
    console.log(result.data);
  };

  return (
    <html class="html-log">
      <body class="background-log">
        <Paper class="login-page" style={{marginTop:100}}>
          <Stack
            sx={{
              width: "auto",
              height: "auto",
              borderRadius: 3,
              background: "#f5df4d",
            }}
          >
            <Box>
              <img
                className="logo"
                src={logo}
                alt="logorabbit"
                style={{
                  width: "60%",
                  height: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "5%",
                  paddingBottom:'8%'
                }}
              />
            </Box>
          </Stack>
          <div class="form">
            <form class="login-form">
              <h1 class="head">ลงชื่อเข้าใช้งาน</h1>
              <Stack spacing={3} paddingBottom={2}>
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
                  type="password"
                  label="รหัสผ่าน"
                  variant="outlined"
                  onChange={(event) => setPassfill(event.target.value)}
                  inputProps={{ style: { fontFamily: "Prompt" } }}
                  InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                />
              </Stack>
              <Link to="/">
                <button type="login" onClick={loginpress}>
                  เข้าสู่ระบบ
                </button>
              </Link>
              <p>
                <Link to="/register">
                  <button type="register">สร้างบัญชีใหม่</button>
                </Link>
              </p>
            </form>
          </div>
        </Paper>
      </body>
    </html>
  );
}

export default Login;
