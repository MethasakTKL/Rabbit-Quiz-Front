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
import "./AppHeader.css";
import { EmojiEvents, MenuTwoTone } from "@mui/icons-material";

//authentic
import { ax, useAuth } from "../../auth/auth";

function AppHeader() {
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

  const navigate = useNavigate();

  //วิธีเรียกข้อมูลหริอ fetch data มาใช้
  const [userDetail, setUserDetail] = React.useState(null) //ตัวแปรใช้ useState ตั้ง
  const [userRole, setUserRole] = React.useState('')
  const [userName, setUserName] = React.useState('')


  useEffect(() => {    // <---- ใช้ useEffect async fucntion เพื่อลดการเรียกใช้ fetchData
    async function fetchData() {
      const response = await ax.get('/userdetail')
      console.log("Fetch data for header success...")
      setUserDetail(response.data)
      setUserName(response.data.first_name + " " + response.data.last_name)

      if (response.data.is_staff) {
        setUserRole('คุณครู')
      } else {
        setUserRole('นักเรียน')
      }
    }
    fetchData();
  }, []);




  return (
    <div>
      <Box>
        <AppBar position="static" style={{ background: "#5F498C" }}>
          <CssBaseline />
          <Toolbar>
            <div className="goback-button">
              <Button onClick={() => navigate(-1)}>
                <ArrowBackIosIcon sx={{ fontSize: 30, color: "white" }} />
              </Button>
            </div>
            <div className="appheader-logo">
              <Link to="/">
                <img src={logo} alt="logorabbit" width={"120"} />
              </Link>
            </div>
            {/* PC SECTION */}
            <div class="header-menu">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { background: "#ffdd44", height: 5 },
                  }}
                  textColor="#f5df4d"

                >
                  <Tab
                    className="navtext"
                    label={
                      <div>
                        <HomeIcon style={{ verticalAlign: "middle" }} /> หน้าแรก
                      </div>
                    }
                    sx={{
                      color: "#f3e5f5",
                      fontFamily: "Prompt",
                      display: "inline",
                    }}
                    to="/"
                    component={Link}
                  />
                  <Tab
                    className="navtext"
                    label={
                      <div>
                        <HistoryIcon style={{ verticalAlign: "middle" }} />{" "}
                        กิจกรรม
                      </div>
                    }
                    sx={{
                      color: "#f3e5f5",
                      fontFamily: "Prompt",
                      display: "inline",
                    }}
                    to="/activity"
                    component={Link}
                  />
                  <Tab
                    className="navtext"
                    label={
                      <div>
                        <EmojiEvents style={{ verticalAlign: "middle" }} />{" "}
                        คะแนน
                      </div>
                    }
                    sx={{
                      color: "#f3e5f5",
                      fontFamily: "Prompt",
                      display: "inline",
                    }}
                    to="/mypoints"
                    component={Link}
                  />
                  <Tab
                    className="navtext"
                    label={
                      <div>
                        <FaceIcon style={{ verticalAlign: "middle" }} /> โปรไฟล์
                      </div>
                    }
                    sx={{
                      color: "#f3e5f5",
                      fontFamily: "Prompt",
                      display: "inline",
                    }}
                    to="/profile"
                    component={Link}
                  />
                </Tabs>
              </Box>
            </div>

            {/* PC SECTION */}
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>

              <div class="user-role" >{userRole}</div>
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

export default AppHeader;
