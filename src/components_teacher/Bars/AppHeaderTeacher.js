import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FaceIcon from "@mui/icons-material/Face";
import { AppBar, Box, Button, CssBaseline, Grid, Tab, Tabs, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate, useLocation, browserHistory } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//image
import logo from "../../Static/image/Rabbitquiz_04.png";

//css
import "../../components/Bars/AppHeader.css";
import { EmojiEvents, MenuTwoTone } from "@mui/icons-material";

//authentic
import { AuthProvider, ax, useAuth } from "../../auth/auth";


function AppHeaderTeacher() {
  const auth = useAuth()
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = (event) => {
    setAnchorEl(null);
    auth.signout()
  };

  // เปลี่ยนสีของ Tabs บน Headers เวลากดเปลี่ยน path
  const navigate = useNavigate();
  const path = useLocation().pathname;
  function handleGoBack() {
    navigate(-1)
  }
  if (path == "/") { if (value != 0) { setValue(0) } }
  if (path == "/profile") { if (value != 1) { setValue(1) } }
  if (path == "/classroom-activity-teacher") { if (value != 2) { setValue(2) } }

  //วิธีเรียกข้อมูลหริอ fetch data มาใช้

  let userName =
    localStorage.getItem('user_first_name') + " " +
    localStorage.getItem('user_last_name')

  return (
    <div>
      <Box>
        <AppBar position="static" style={{ background: "#4b327e" }}>
          <CssBaseline />
          <Toolbar>
            <div className="goback-button">
              <ArrowBackIosIcon onClick={handleGoBack} sx={{ fontSize: 25, color: "white" }} />
            </div>
            <div className="appheader-logo">
              <Link to="/">
                <img src={logo} alt="logorabbit" width={"120"} className="logorabbit" />
              </Link>
            </div>
            {/* PC SECTION */}
            <div class="header-menu">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{ height: "auto" }}
                  TabIndicatorProps={{
                    style: { background: "#ffdd44", height: 6 },
                  }}
                  textColor="#f5df4d"

                >
                  <Tab
                    className="navtext"
                    label={
                      <div class="tab-component">
                        <HomeIcon style={{ verticalAlign: "middle" }} /> หน้าแรก
                      </div>
                    }
                    sx={{
                      "&:hover": {
                        color: "#f3e5f5",
                      },
                      color: "#f3e5f5",
                      fontFamily: "Prompt",
                      display: "inline",
                      fontSize: "18px",
                      height: "63px"

                    }}
                    to="/"
                    component={Link}
                  />
                  <Tab
                    className="navtext"
                    label={
                      <div class="tab-component">
                        <FaceIcon style={{ verticalAlign: "middle", fontSize: "x-large", }} /> โปรไฟล์
                      </div>
                    }
                    sx={{
                      "&:hover": {
                        color: "#f3e5f5",
                      },
                      fontFamily: "Prompt",
                      fontSize: "18px",
                      display: "inline",
                    }}
                    to="/profile"
                    component={Link}
                  />
                  {/* <Tab
                  
                    className="navtext"
                    label={
                      <div class="tab-component">
                        <HistoryIcon style={{ verticalAlign: "middle" }} />{" "}
                        กิจกรรม
                      </div>
                    }
                    sx={{
                      "&:hover": {
                        color: "#f3e5f5",
                      },
                      color: "#f3e5f5",
                      fontFamily: "Prompt",
                      display: "inline",
                      fontSize: "18px",
                    }}
                    to="/classroom-activity-teacher"
                    component={Link}
                  /> */}

                </Tabs>
              </Box>
            </div>

            {/* PC SECTION */}
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>

              <div class="user-role" >คุณครู</div>
              <div class="user-name">{userName}</div>

            </Grid>
            {/* Other Button */}
            <div className="hambergur">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuTwoTone sx={{ color: "#FFFFFF" }} />
              </Button>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >

              <Box sx={{ width: 150 }}>
                <MenuItem onClick={handleClose} to="/profile" component={Link}>
                  <div className="menubar">โปรไฟล์ของคุณ</div>
                </MenuItem>
                <MenuItem onClick={onClickLogout} to="/login" component={Link}>
                  <div className="menubar">ออกจากระบบ</div>
                </MenuItem>
              </Box>
            </Menu>

          </Toolbar>
        </AppBar>
      </Box>
      <div></div>
    </div >
  );
}

export default AppHeaderTeacher;
