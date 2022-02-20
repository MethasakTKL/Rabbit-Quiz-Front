import React from "react";
import { Box, Button, Paper } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
 
      <h4 className="hello">สวัสดี, ชนาวัฒน์ ทั้วสุภาพ</h4>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: 220,
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={3}>
          <typography>
            <h1 className="title" sx={{}}>
              ห้องเรียน <ClassIcon sx={{ fontSize: "50" }} />
            </h1>
          </typography>
          <Box>
            <Button
              style={{
                display: "flex",
                background: 'linear-gradient(135deg, #33C58E 20%, #63FD88 90%)',
                marginRight: "auto",
                marginLeft: "auto",
                bottom: 10,
              }}
              variant="contained"
              sx={{ width: "90%", height: 100, borderRadius: 3 }}
              to="/classroom/"
              component={Link}
            >
              <typography>
                <h1 className="roomname">240-124 การเกษตร</h1>
              </typography>
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
