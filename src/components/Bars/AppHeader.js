import React from "react";
import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//image
import logo from "../../Static/image/logo.png";

function AppHeader() {
  return (
    <div>
      <Box>
        <AppBar position="static" style={{ background: "#5F498C" }}>
          <Toolbar>
            <Button>
              <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
            </Button>
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>
              <img src={logo} width={"70"} />
            </Grid>
            <Grid></Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default AppHeader;
