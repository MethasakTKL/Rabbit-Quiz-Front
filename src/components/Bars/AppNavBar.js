import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FaceIcon from "@mui/icons-material/Face";
import "./AppNavBar.css";
import { AppBar, Box, CssBaseline, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { EmojiEvents } from "@mui/icons-material";
import { useLocation } from "react-router";

function AppNavBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // เปลี่ยนสีของ Tabs บน Navbars เวลากดเปลี่ยนลิ้ง
  const path = useLocation().pathname;
  if (path == "/") { if (value != 0) { setValue(0) } }
  if (path == "/activity") { if (value != 1) { setValue(1) } }
  if (path == "/mypoints") { if (value != 2) { setValue(2) } }
  if (path == "/profile") { if (value != 3) { setValue(3) } }


  return (
    <Box sx={{ justifyContent: "center" }}>
      <AppBar
        style={{ background: "#5f498c" }}
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
          fontFamily: "Prompt",
        }}
      >
        <CssBaseline />
        <div class="navbar">
          <Toolbar sx={{ justifyContent: "center" }}>
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
                icon={<HomeIcon />}
                label="หน้าแรก"
                sx={{
                  "&:hover": {
                    color: "#f3e5f5"
                  },
                  color: "#f3e5f5", fontFamily: "Prompt"
                }}
                to="/"
                component={Link}
              />
              <Tab
                className="navtext"
                icon={<HistoryIcon />}
                label="กิจกรรม"
                sx={{
                  "&:hover": {
                    color: "#f3e5f5"
                  },
                  color: "#f3e5f5", fontFamily: "Prompt"
                }}
                to="/activity"
                component={Link}
              />
              <Tab
                className="navtext"
                icon={<EmojiEvents />}
                label="คะแนน"
                sx={{
                  "&:hover": {
                    color: "#f3e5f5"
                  },
                  color: "#f3e5f5", fontFamily: "Prompt"
                }}
                to="/mypoints"
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
                }}
                to="/profile"
                component={Link}
              />
            </Tabs>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}

export default AppNavBar;
