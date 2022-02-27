import "./Register.css";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Register() {
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
                id="outlined-basic"
                label="ชื่อ"
                variant="outlined"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="นามสกุล"
                variant="outlined"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="ชื่อบัญชี"
                variant="outlined"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="outlined-basic"
                label="อีเมล"
                variant="outlined"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="outlined-basic"
                type="password"
                label="รหัสผ่าน"
                variant="outlined"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="outlined-basic"
                type="password"
                label="ยืนยันรหัสผ่าน"
                variant="outlined"
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
                  control={<Radio />}
                  label={<Typography className="choices">นักเรียน</Typography>}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label={<Typography className="choices">คุณครู</Typography>}
                />
              </RadioGroup>
            </FormControl>
            <p>
              <button type="register">สร้างบัญชี</button>
            </p>
            <div class="text-backtologin">
              มีบัญชีอยู่แล้วใช่ไหม
              <Link to="/login">
                <button type="backtologin">เข้าสู่ระบบ</button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Register;
