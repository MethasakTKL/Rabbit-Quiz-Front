import "./Register.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import Radio from '@mui/material/Radio';
import { Box } from "@mui/system";


function Register() {
  return (
    <div class="register-page">
      <div class="logo">
        <logo>
          <img src="https://www.img.in.th/images/f4de721891268e159ad5acd5b6a7a64d.png" />
        </logo>
      </div>
      <div class="form">
        <h1 class="head">สร้างบัญชี</h1>
        <div type="namebox">
          <input type="name" placeholder="ชื่อ" />
          <input type="surname" placeholder="นามสกุล" />
        </div>
        <input type="email" placeholder="อีเมล" />
        <input type="text" placeholder="ชื่อผู้ใช้" />
        <input type="password" placeholder="รหัสผ่าน" />
        <Box sx={{background:'#E0CCFF'}}> 
        <FormControl >
          
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="นักเรียน"
              color="default"
              sx={{color:'#7F7F7F'}}
            />
            <FormControlLabel
              value="teacher"
              control={<Radio />}
              label="คุณครู"
              color="default"
              sx={{color:'#7F7F7F'}}

            />
          </RadioGroup>
        </FormControl>
        </Box>
        <Link to="/login">
          <p>
            <button type="register">สร้างบัญชีใหม่</button>
          </p>
          <button type="backtologin">กลับเข้าสู่ระบบ</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
