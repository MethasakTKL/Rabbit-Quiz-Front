import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FaceIcon from "@mui/icons-material/Face";

import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function AppNavBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        }}
      >
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
              sx={{ color: "#f3e5f5" }}
              to="/"
              component={Link}
              
            />
            <Tab
              className="navtext"
              icon={<HistoryIcon />}
              label="กิจกรรม"
              sx={{ color: "#f3e5f5" }}
              to="/activity"
              component={Link}
              
            />
            <Tab
              className="navtext"
              icon={<FaceIcon />}
              label="โปรไฟล์"
              sx={{ color: "#f3e5f5" }}
              to="/profile"
              component={Link}
              
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppNavBar;
