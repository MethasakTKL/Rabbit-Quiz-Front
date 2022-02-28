import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import "./Activity_Teacher.css";
import { Box } from "@mui/system";

function Activity_Teacher() {
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
    <div>
      <Paper
        elevation={4}
        sx={{
          display: "block",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          }
        }}>
        <Button paddingTop={2} paddingBottom={2}>
          <h1 className="activitybutton">
            กิจกรรมที่ 1 รดน้ำต้นไม้วันที่ 1
          </h1>
        </Button>
        <Button paddingTop={2} paddingBottom={2}>
          <h1 className="activitybutton">
            กิจกรรมที่ 2 รดน้ำต้นไม้วันที่ 2
          </h1>
        </Button>
      </Paper>
    </div >
  );
}

export default Activity_Teacher;
