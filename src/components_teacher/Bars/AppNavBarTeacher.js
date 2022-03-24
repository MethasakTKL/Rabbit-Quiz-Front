import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FaceIcon from "@mui/icons-material/Face";
import "./AppNavBarTeacher.css";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { Link, useNavigate, useLocation, } from "react-router-dom";

function AppNavBarTeacher() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // เปลี่ยนสีของ Tabs บน Headers เวลากดเปลี่ยน path
  const navigate = useNavigate();
  const path = useLocation().pathname;
  if (path == "/") { if (value != 0) { setValue(0) } }
  if (path == "/profile") { if (value != 1) { setValue(1) } }
  if (path == "/classroom-activity-teacher") { if (value != 2) { setValue(2) } }
  return (
    <Box sx={{ justifyContent: "center" }}>
      <AppBar
        style={{ background: "#4b327e" }}
        sx={{
          top: "auto",
          bottom: 15,
          right: 5,
          left: 5,
          borderRadius: 7,
          width: "auto",
          maxWidth: 500,
          flexGrow: 1,
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Prompt"
        }}
      >
        <div class="navbar">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: "#ffdd44", height: 5 } }}
              textColor="#f5df4d"
            >
              <Tab
                className="navtext"
                icon={<HomeIcon />}
                label="หน้าแรก"
                sx={{
                  "&:hover": {
                    color: "#f3e5f5"
                  },
                  color: "#f3e5f5", fontFamily: "Prompt"
                }} to="/"
                component={Link}

              />
              <Tab
                className="navtext"
                icon={<FaceIcon />}
                label="โปรไฟล์"
                sx={{
                  "&:hover": {
                    color: "#f3e5f5"
                  },
                  color: "#f3e5f5", fontFamily: "Prompt"
                }} to="/profile"
                component={Link}

              />
              {/* <Tab
                className="navtext"
                icon={<HistoryIcon />}
                label="กิจกรรม"
                sx={{
                  "&:hover": {
                    color: "#f3e5f5"
                  },
                  color: "#f3e5f5", fontFamily: "Prompt"
                }}
                to="/classroom-activity-teacher"
                component={Link}

              /> */}
            </Tabs>
          </Toolbar>
        </div>
      </AppBar>
    </Box>

  );
}

export default AppNavBarTeacher;
