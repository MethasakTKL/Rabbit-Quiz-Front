import "./Register.css";
import { Link } from "react-router-dom";
import React from 'react';

function Register() {
  return (
    <html>
      <body class="background-reg">
        <div class="register-page">
          <div class="logo">
            <logo>
              <img src="https://www.img.in.th/images/f4de721891268e159ad5acd5b6a7a64d.png" alt="logorabbit" />
            </logo>
          </div>
          <div class="form">
            <h1 class="head">สร้างบัญชีใหม่</h1>
            <div type="namebox">
              <input type="name" placeholder="ชื่อ" />
              <input type="surname" placeholder="นามสกุล" />
            </div>
            <input type="email" placeholder="อีเมล" />
            <input type="text" placeholder="ชื่อบัญชี" />
            <input type="password" placeholder="รหัสผ่าน" />
            <box class="cate-reg">
              <div type="choose-role"> เลือกบทบาท</div>
              <input type="radio" name="reg" value="teacher" checked /> คุณครู
              <input type="radio" name="reg" value="student" /> นักเรียน
            </box>
            <p><button type="register">สร้างบัญชี</button></p>
            <div class="text-backtologin">มีบัญชีอยู่แล้วใช่ไหม
            <Link to="/login">
              <button type="backtologin">เข้าสู่ระบบ</button>
            </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Register;
