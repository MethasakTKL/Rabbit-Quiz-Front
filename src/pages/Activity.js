import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import "./Activity.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


function Activity() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    setOpen(false);
  };

  return (
    <body>
      <Box
        sx={{
          bgcolor: "white",
          height: "500px",
          width: "100%",
          display: "block",
          flexWrap: "wrap",
          paddingLeft: 3,
          paddingRight: 3,
          "& > :not(style)": { mb: 2 }
        }}
      >
        <Box sx={{ paddingTop: 1 }}></Box>
        <Button
          sx={{
            color: "black",
            width: "100%",
            display: "block",
            border: 0,
            paddingBottom: 1.5,
            boxShadow: 3
          }}
          style={{ backgroundColor: 'white' }}
          to='/classroom-activity'
          component={Link}
        >

          <h1 className="activity">
            กิจกรรมที่ 2 รดน้ำต้นไม้วันที่ 2
          </h1>
          <div className="assignment-detail">
            <div>240-124 การเกษตร</div>
            <div type="time-activity">
              <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
              <div>สิ้นสุด</div><div type="duetime">1 มีนาคม 2020 10.00 PM</div>
            </div>
          </div>
        </Button>
      </Box>
    </body >
  );
}

export default Activity;
