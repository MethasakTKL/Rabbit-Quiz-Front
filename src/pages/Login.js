import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
  return (
      <div class="login-page">
        <div class="logo">
        <img src="https://www.img.in.th/images/f4de721891268e159ad5acd5b6a7a64d.png" ></img>
        </div>
        <div class="form">
          <form class="login-form">
            <h1 class='head'>ลงชื่อเข้าใช้งาน</h1>
            <input type="text" placeholder="ชื่อผู้ใช้" />
            <input type="password" placeholder="รหัสผ่าน" />
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
  )
}

export default Login