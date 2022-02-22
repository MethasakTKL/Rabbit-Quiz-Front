import React from 'react'
import "./Register.css"
import { Link } from "react-router-dom";

function Register() {
  return (
    <div class="register-page">
      <div class="logo">
          <logo>
            <img src="https://www.img.in.th/images/f4de721891268e159ad5acd5b6a7a64d.png"/>
          </logo>
      </div>
    <div class="form">
        <h1 class="title">สร้างบัญชี</h1>
        <div type="namebox">
        <input type="name" placeholder="ชื่อ" />
        <input type="surname" placeholder="นามสกุล" />
        </div>
        <input type="email" placeholder="อีเมล" />
        <input type="text" placeholder="ชื่อผู้ใช้" />
        <input type="password" placeholder="รหัสผ่าน" />
        <Link to="/login">
        <p><button type="register">สร้างบัญชีใหม่</button></p>
        <button type="backtologin">กลับเข้าสู่ระบบ</button>
        </Link>
      </div>
    </div>
  )
}

export default Register