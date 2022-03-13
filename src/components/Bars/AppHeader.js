import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FaceIcon from "@mui/icons-material/Face";
import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//image
import logo from "../../Static/image/Rabbitquiz_04.png";
//css
import "./AppHeader.css";
import { EmojiEvents, MenuTwoTone } from "@mui/icons-material";

function AppHeader() {
  const history = useHistory();
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
  return (
    <div>
      <Box>
        <AppBar position="static" style={{ background: "#5F498C" }}>
          <Toolbar>
            <div className="goback-button">
              <Button onClick={() => history.goBack()}>
                <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
              </Button>
            </div>
            <Link to="/">
              <img src={logo} alt="logorabbit" width={"120"} />
            </Link>
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
              
                <div class="name">นักเรียน</div>
                <div class="namee">ชนาวัฒน์ ทั้วสุภาพ</div>
              
            </Grid>
            {/* Other Button */}
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuTwoTone sx={{ color: "#FFFFFF" }} />
            </Button>

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
                <MenuItem onClick={handleClose} to="/login" component={Link}>
                  <div className="menubar">ออกจากระบบ</div>
                </MenuItem>
              </Box>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <div></div>
    </div>
  );
}

export default AppHeader;
