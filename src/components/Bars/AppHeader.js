import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FaceIcon from "@mui/icons-material/Face";
import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
//image
import logo from "../../Static/image/logo.png";
//css
import "./AppHeader.css";

function AppHeader() {
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <img src={logo} alt="logorabbit" width={"70"} />
            </Link>
            {/* PC SECTION */}
            <div class="header-menu">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{ style: { background: "#ffdd44", height: 5 } }}
                  textColor="#f5df4d"

                >
                  <Tab
                    className="navtext"
                    label={<div><HomeIcon style={{ verticalAlign: "middle" }} />{" "}หน้าแรก</div>}
                    sx={{ color: "#f3e5f5", fontFamily: "Prompt", display: 'inline' }}
                    to="/"
                    component={Link}



                  />
                  <Tab
                    className="navtext"
                    label={<div><HistoryIcon style={{ verticalAlign: "middle" }} />{" "}กิจกรรม</div>}
                    sx={{ color: "#f3e5f5", fontFamily: "Prompt", display: 'inline' }}
                    to="/activity"
                    component={Link}

                  />
                  <Tab
                    className="navtext"
                    label={<div><FaceIcon style={{ verticalAlign: "middle" }} />{" "}โปรไฟล์</div>}
                    sx={{ color: "#f3e5f5", fontFamily: "Prompt", display: 'inline' }}
                    to="/profile"
                    component={Link}

                  />
                </Tabs>
              </Box>
            </div>

            {/* PC SECTION */}
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }} >
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <div class="name">นักเรียน</div>
                <div class="namee">ชนาวัฒน์ ทั้วสุภาพ</div>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default AppHeader;
