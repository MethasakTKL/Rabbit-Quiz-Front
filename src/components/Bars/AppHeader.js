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
            <div class="Headbar-Header">Rabbit Quiz</div>
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>
              <Link to="/">
                <img src={logo} width={"70"} />
              </Link>
            </Grid>
            <Grid></Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default AppHeader;
