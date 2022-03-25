import "./Register.css";

//React
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Mui
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//ant-desigmn
import { message } from "antd";
import { CheckCircleFilled } from '@ant-design/icons';


// authentic
import { ax } from "../auth/auth";

// Image
import logo from "../Static/image/Rabbitquiz_05.png";

// text field
import RegexTextField from "../components/RegexTextField";
import { axios } from "axios";
const onlyThaiAlphabet = /[^ก-๛]/gi;


function Register() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const [namefill, setNamefill] = useState("");
  const [passfill, setPassfill] = useState("");
  const [pass2fill, setPass2fill] = useState("");
  const [stafffill, setStafffill] = useState("");
  const [emailfill, setEmailfill] = useState("");
  const [firstnamefill, setFirstnamefill] = useState("");
  const [lastnamefill, setLastnamefill] = useState("");

  // Error Message Section
  const [showError, setShowError] = useState(false)
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  const [errorPassWord2, setErrorPassWord2] = useState("");
  const [errorIsStaff, setErrorIsStaff] = useState("");

  // Register Successfuly Section
  const [regDone, setRegDone] = useState(false)

  const registpress = async () => {
    await localStorage.clear()
    console.log("Username", namefill);
    console.log("Password", passfill);
    console.log("Role", stafffill);
    console.log("Email", emailfill);
    console.log("Firstname", firstnamefill);
    console.log("Lastname", lastnamefill);

    if (/^[ก-๛]*$/.test(firstnamefill + lastnamefill) === false) {
      console.error("ชื่อและนามสกุลเป็นอังกฤษ")
      setShowError(true)
      setErrorFirstName("กรุณากรอกชื่อและนามสกุลเป็นภาษาไทย")
      setErrorLastName("")
      setErrorUserName("")
      setErrorEmail("")
      setErrorPassWord("")
      setErrorPassWord2("")
    }

    if (/^[ก-๛]*$/.test(firstnamefill + lastnamefill)) {
      try {
        let RegistResult = await ax.post("/auth/register/", {
          username: namefill,
          password: passfill,
          password2: pass2fill,
          is_staff: stafffill,
          email: emailfill,
          first_name: firstnamefill,
          last_name: lastnamefill,
        });
        console.log("Register success");
        console.log(RegistResult.data);
        setShowError(false)
        setRegDone(true)
        message.success({
          content: "สร้างบัญชีสำเร็จ",
          style: { fontFamily: "Prompt", marginTop: 30, fontSize: "20px" },
          duration: 3
        });
      }
      catch (error) {
        console.log(error.response)
        setShowError(true)
        if (error.response.data.first_name) { var errorFirstName = error.response.data.first_name.toString() }
        if (error.response.data.last_name) { var errorLastName = error.response.data.last_name.toString() }
        if (error.response.data.username) { var errorUserName = error.response.data.username.toString() }
        if (error.response.data.email) { var errorEmail = error.response.data.email.toString() }
        if (error.response.data.password) { var errorPassWord = error.response.data.password.toString() }
        if (error.response.data.password2) { var errorPassWord2 = error.response.data.password2.toString() }
        if (error.response.data.is_staff) { var errorIsStaff = error.response.data.is_staff.toString() }

        if (errorFirstName === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลชื่อของผู้ใช้")
          setErrorFirstName("กรุณากรอกชื่อของท่าน")

        }
        if (errorLastName === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลนามสกุลผู้ใช้")
          setErrorLastName("กรุณากรอกนามสกุลของท่าน")

        }
        if (errorUserName === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลชื่อบัญชี")
          setErrorUserName("กรุณากรอกชื่อบัญชี")

        }
        if (errorUserName === "A user with that username already exists.") {
          console.error("ชื่อบัญชีนี้ซ้ำกับในระบบ")
          setErrorUserName("ชื่อบัญชีนี้มีผู้ใช้แล้ว ลองใช้ชื่ออื่น")

        }
        if (errorUserName === "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.") {
          console.error("รูปแบบชื่อบัญชีไม่ถูกต้อง")
          setErrorUserName("ชื่อบัญชีต้องเป็นตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ")

        }
        if (errorEmail === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลในช่องอีเมล")
          setErrorEmail("กรุณากรอกข้อมูลในช่องอีเมล")

        }
        if (errorEmail === "This field must be unique.") {
          console.error("อีเมลนี้ซ้ำกับในระบบ")
          setErrorEmail("อีเมลนี้มีผู้ใช้งานแล้ว ลองใช้อีเมลอื่น")

        }
        if (errorEmail === "Enter a valid email address.") {
          console.error("รูปแบบอีเมลนี้ไม่ถูกต้อง")
          setErrorEmail("กรุณากรอกข้อมูลที่อยู่อีเมลให้ถูกต้อง")

        }
        if (errorPassWord === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลในช่องรหัสผ่าน")
          setErrorPassWord("กรุณากรอกข้อมูลในช่องรหัสผ่าน")

        }
        if (errorPassWord === "This password is too short. It must contain at least 8 characters." ||
          errorPassWord === "This password is too short. It must contain at least 8 characters.,This password is too common.,This password is entirely numeric.") {
          console.error("รหัสผ่านสั้นเกินไป")
          setErrorPassWord("รหัสผ่านสั้นเกินไป จะต้องมีความยาวอย่างน้อย 8 ตัวอักษร")

        }

        if (errorPassWord === "This password is too common." ||
          errorPassWord === "This password is too common.,This password is entirely numeric.") {
          console.error("รหัสผ่านคาดเดาง่ายเกินไป")
          setErrorPassWord("โปรดเลือกรหัสผ่านที่ปลอดภัยยิ่งขึ้น ลองใช้ตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน")

        }
        if (errorPassWord2 === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลในช่องยืนยันรหัสผ่าน")
          setErrorPassWord2("กรุณากรอกข้อมูลในช่องยืนยันรหัสผ่าน")

        }
        if (errorIsStaff === "This field may not be blank.") {
          console.error("ไม่พบข้อมูลประเภทบัญชีผู้ใช้")
          setErrorIsStaff("กรุณาเลือกประเภทบัญชีผู้ใช้")

        }
        if (errorFirstName === undefined) {
          setErrorFirstName("")

        }
        if (errorLastName === undefined) {
          setErrorLastName("")

        }
        if (errorUserName === undefined) {
          setErrorUserName("")

        }
        if (errorEmail === undefined) {
          setErrorEmail("")

        }
        if (errorPassWord === undefined) {
          setErrorPassWord("")

        }
        if (errorPassWord2 === undefined) {
          setErrorPassWord2("")
        }
        if (errorIsStaff === undefined) {
          setErrorIsStaff("")
        }
        if (pass2fill != '') {
          if (pass2fill != passfill) {
            setErrorPassWord2("กรุณายืนยันรหัสผ่านให้ตรงกัน")
          }
        }
      }
    }
  }

  return (
    <html>
      <header className="App-header">

        <div class="register-page">
          <div class="logo">
            <img src={logo} alt="logorabbit" />
          </div>
          <div class="form">
            <div>
              {!regDone && <>
                <h1 class="head">สร้างบัญชีใหม่</h1>
                <div className="reg-password" password>
                  <div type="reg-header">ข้อกำหนด</div>
                  <div>• ชื่อ-นามสกุล จะต้องเป็นตัวอักษรภาษาไทยเท่านั้น</div>
                  <div>• รหัสผ่านจะต้องใช้อักขระ 8 ตัวขึ้นไป สามารถมีตัวอักษร (a-z A-z) ตัวเลข (0-9) และสัญลักษณ์ผสมกัน (เช่น ! @ # % & * _ ? , . /)</div>
                  <p />
                </div>
              </>
              }
              {showError && <div class="register-error">
                <div />{errorFirstName}
                <div />{errorLastName}
                <div />{errorUserName}
                <div />{errorEmail}
                <div />{errorPassWord}
                <div />{errorPassWord2}
                <div />{errorIsStaff}</div>
              }
              {!regDone &&
                <>
                  <Stack spacing={1} paddingBottom={2}>
                    <TextField
                      helpertext="Hey dude"
                      id="name"
                      label="ชื่อ"
                      variant="outlined"
                      regex={onlyThaiAlphabet}
                      onChange={(event) => setFirstnamefill(event.target.value)}
                      inputProps={{ style: { fontFamily: "Prompt" } }}
                      InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                      required
                    />
                    <TextField
                      id="lastname"
                      label="นามสกุล"
                      variant="outlined"
                      regex={onlyThaiAlphabet}
                      onChange={(event) => setLastnamefill(event.target.value)}
                      inputProps={{ style: { fontFamily: "Prompt" } }}
                      InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                      required
                    />
                    <TextField
                      id="username"
                      label="ชื่อบัญชี"
                      variant="outlined"
                      onChange={(event) => setNamefill(event.target.value)}
                      inputProps={{ style: { fontFamily: "Prompt" } }}
                      InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                      required

                    />
                    <TextField
                      id="email"
                      type="email"
                      label="อีเมล"
                      variant="outlined"
                      onChange={(event) => setEmailfill(event.target.value)}
                      inputProps={{ style: { fontFamily: "Prompt" } }}
                      InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                      required
                    />
                    <TextField
                      id="password"
                      type={visible ? 'text' : 'password'}
                      label="รหัสผ่าน"
                      variant="outlined"
                      onChange={(event) => setPassfill(event.target.value)}
                      InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                      required
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


                    />
                    <TextField
                      id="password-confirm"
                      type={visible ? 'text' : 'password'}
                      label="ยืนยันรหัสผ่าน"
                      variant="outlined"
                      onChange={(event) => setPass2fill(event.target.value)}
                      InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                      required
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
                        value="student"
                        onClick={() => setStafffill("False")}
                        control={<Radio />}
                        label={
                          <Typography
                            className="choices"
                            sx={{ fontFamily: "Prompt" }}
                          >
                            นักเรียน
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="teacher"
                        onClick={() => setStafffill("True")}
                        control={<Radio />}
                        label={
                          <Typography
                            className="choices"
                            sx={{ fontFamily: "Prompt" }}
                          >
                            คุณครู
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                  <button type="register" onClick={registpress}>
                    สร้างบัญชี
                  </button>
                  <p />
                  <div class="text-backtologin">
                    มีบัญชีอยู่แล้วใช่ไหม
                    <Link to="/login">
                      <button type="backtologin">เข้าสู่ระบบ</button>
                    </Link>
                  </div>
                </>
              }


              {regDone ?
                <div className="reg-done-page">
                  <div>
                    <CheckCircleIcon />
                  </div>
                  <h2 className="reg-header-congrat"><CheckCircleIcon sx={{ fontSize: 180, color: "#4cb143", paddingBottom: 5 }} /><div>สร้างบัญชีเสร็จสิ้น</div></h2>
                  <h2 className="reg-congrat">ยินดีด้วยคุณได้สร้างบัญชีเสร็จเรียบร้อยแล้ว</h2>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="reg-login">กลับไปยังหน้าเข้าสู่ระบบ</div>
                  </Link>
                </div>
                : <div />}


            </div>
          </div>
        </div>
      </header>
    </html >
  );
}

export default Register;
