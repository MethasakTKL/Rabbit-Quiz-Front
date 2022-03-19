import "./Register.css";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Grid,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ax } from "../auth/auth";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../Static/image/Rabbitquiz_05.png";

function Register() {
  const [open, setOpen] = React.useState(false);
  const handleClickClose = () => {
    setOpen(false);
  };

  const [namefill, setNamefill] = useState("");
  const [passfill, setPassfill] = useState("");
  const [pass2fill, setPass2fill] = useState("");
  const [stafffill, setStafffill] = useState("");
  const [emailfill, setEmailfill] = useState("");
  const [firstnamefill, setFirstnamefill] = useState("");
  const [surnamefill, setSurnamefill] = useState("");

  const registpress = async () => {
    console.log(namefill);
    console.log(passfill);
    console.log(stafffill);
    console.log(emailfill);
    console.log(firstnamefill);
    console.log(surnamefill);

    try {
      let RegistResult = await ax.post("/auth/register/", {
        username: namefill,
        password: passfill,
        password2: pass2fill,
        is_staff: stafffill,
        email: emailfill,
        first_name: firstnamefill,
        last_name: surnamefill,
      });
      console.log("Register success");
      console.log(RegistResult.data);
      setOpen(true);
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.data)
        var errorUserName = error.response.data.username
        var errorEmail = error.response.data.email
        var errorPassWord = error.response.data.password
        var errorPassWord2 = error.response.data.password2
        var errorIsStaff = error.response.data.is_staff

        if (errorUserName === "This field may not be blank.") {
          console.log("ไม่พบข้อมูลชื่อบัญชี")
          setErrorUserName("กรุณากรอกข้อมูลชื่อบัญชี")

        }
        if (errorUserName === "A user with that username already exists.") {
          console.log("ชื่อบัญชีนี้ซ้ำกับในระบบ")
          setErrorUserName("ชื่อบัญชีนี้มีผู้ใช้แล้ว ลองใช้ชื่ออื่น")

        }
        if (errorUserName === "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.") {
          console.log("รูปแบบชื่อบัญชีไม่ถูกต้อง")
          setErrorUserName("ชื่อบัญชีต้องเป็นตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ")

        }
        if (errorEmail === "This field may not be blank.") {
          console.log("ไม่พบข้อมูลในช่องอีเมล")
          setErrorEmail("กรุณากรอกข้อมูลในช่องอีเมล")

        }
        if (errorEmail === "This field must be unique.") {
          console.log("อีเมลนี้ซ้ำกับในระบบ")
          setErrorEmail("อีเมลนี้ได้ถูกลงทะเบียนแล้ว ลองใช้อีเมลอื่น")

        }
        if (errorEmail === "Enter a valid email address.") {
          console.log("รูปแบบอีเมลนี้ไม่ถูกต้อง")
          setErrorEmail("กรุณากรอกข้อมูลที่อยู่อีเมลให้ถูกต้อง")

        }
        if (errorPassWord === "This field may not be blank.") {
          console.log("ไม่พบข้อมูลในช่องรหัสผ่าน")
          setErrorPassWord("กรุณากรอกข้อมูลในช่องรหัสผ่าน")

        }
        if (errorPassWord === "This password is too short. It must contain at least 8 characters.") {
          console.log("รหัสผ่านสั้นเกินไป")
          setErrorPassWord("รหัสผ่านสั้นเกินไป จะต้องมีความยาวอย่างน้อย 8 ตัวอักษร")

        }
        if (pass2fill !== '') {
          if (passfill !== pass2fill) {
            console.log("รหัสผ่านไม่ตรงกัน")
            setErrorPassWord("กรุณายืนยันรหัสผ่านให้ตรงกัน")

          }
        }
        if (errorPassWord !== undefined) {
          if ("This password is too common." in errorPassWord) {
            console.log("รหัสผ่านคาดเดาง่ายเกินไป")
            setErrorPassWord("โปรดเลือกรหัสผ่านที่ปลอดภัยยิ่งขึ้น ลองใช้ตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน")

          }
        }
        if (errorPassWord2 === "This field may not be blank.") {
          console.log("ไม่พบข้อมูลในช่องยืนยันรหัสผ่าน")
          setErrorPassWord2("กรุณากรอกข้อมูลในช่องยืนยันรหัสผ่าน")

        }
        if (errorIsStaff === "This field may not be blank.") {
          console.log("ไม่พบข้อมูลประเภทบัญชีผู้ใช้")
          setErrorIsStaff("กรุณาเลือกประเภทบัญชีผู้ใช้")

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
        setShowError(true)
      }
    }
  }
  const [showError, setShowError] = useState(false)
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  const [errorPassWord2, setErrorPassWord2] = useState("");
  const [errorIsStaff, setErrorIsStaff] = useState("");

  return (
    <html>
      <body class="background-reg">
        <div class="register-page">
          <div class="logo">
            <logo>
              <img src={logo} alt="logorabbit" />
            </logo>
          </div>
          <div class="form">
            <h1 class="head">สร้างบัญชีใหม่</h1>
            {showError === true && <div class="register-error">
              <div />{errorUserName}
              <div />{errorEmail}
              <div />{errorPassWord}
              <div />{errorPassWord2}
              <div />{errorIsStaff}</div>
            }
            <Stack spacing={1} paddingBottom={2}>
              <TextField
                id="name"
                label="ชื่อ"
                variant="outlined"
                onChange={(event) => setFirstnamefill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="lastname"
                label="นามสกุล"
                variant="outlined"
                onChange={(event) => setSurnamefill(event.target.value)}
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
                label="อีเมล"
                variant="outlined"
                onChange={(event) => setEmailfill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="password"
                type="password"
                label="รหัสผ่าน"
                variant="outlined"
                onChange={(event) => setPassfill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <TextField
                id="password-confirm"
                type="password"
                label="ยืนยันรหัสผ่าน"
                variant="outlined"
                onChange={(event) => setPass2fill(event.target.value)}
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                required
              />
              <div className="reg-password" password>
                <div type="reg-header">ข้อกำหนด</div>
                รหัสผ่านจะต้องใช้อักขระ 8 ตัวขึ้นไปที่มีทั้ง ตัวอักษร (a-z A-z) ตัวเลข (0-9) และสัญลักษณ์ผสมกัน (เช่น ! @ # % & * _ ? , . /)
              </div>
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
                  value="male"
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
            <p>
              <button type="register" onClick={registpress}>
                สร้างบัญชี
              </button>
            </p>
            <div class="text-backtologin">
              มีบัญชีอยู่แล้วใช่ไหม
              <Link to="/login">
                <button type="backtologin">เข้าสู่ระบบ</button>
              </Link>
            </div>
            <Dialog open={open} onClose={handleClickClose}>
              <DialogTitle>
                <Grid>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="reg-header-congrat">
                      สร้างบัญชีเสร็จสิ้น
                    </div>
                    <IconButton sx={{ display: "flex" }}>
                      <CloseIcon onClick={handleClickClose} />
                    </IconButton>
                  </Box>
                </Grid>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div className="reg-congrat">
                    ยินดีด้วยคุณได้สร้างบัญชีเสร็จเรียบร้อยแล้ว
                  </div>
                </DialogContentText>
              </DialogContent>
              <Grid>
                <Box sx={{ display: "flex" }}>
                  <div className="reg-close" onClick={handleClickClose}>
                    ปิด
                  </div>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="reg-login">เข้าสู่ระบบ</div>
                  </Link>
                </Box>
              </Grid>
            </Dialog>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Register;
