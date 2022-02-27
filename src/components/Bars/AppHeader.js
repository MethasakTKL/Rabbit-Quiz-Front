import React from "react";
import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
//image
import logo from "../../Static/image/logo.png";
//css
import "./AppHeader.css";

function AppHeader() {
  const history = useHistory();
  return (
    <div>
      <Box>
        <AppBar position="static" style={{ background: "#5F498C" }}>
          <Toolbar>
            <Button onClick={() => history.goBack()}>
              <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
            </Button>
            <Link to="/">
              <img src={logo} alt="logorabbit" width={"70"} />
            </Link>
            {/* PC SECTION */}
            <Box sx={{ marginLeft: "auto" }}>
              <div class="pc-header">
                <Link to="/" style={{textDecoration: "none"}}>
                  <div>หน้าเเรก</div>
                </Link>
                <Link to="/activity" style={{textDecoration: "none"}}>
                  <div>กิจกรรม</div>
                </Link>
                <Link to="/profile" style={{textDecoration: "none"}}>
                  <div>โปรไฟล์</div>
                </Link>
              </div>
            </Box>
            {/* PC SECTION */}
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }} >
              <Link to="/profile" style={{textDecoration: "none"}}>
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
