import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import "./Activity.css";
import { Link } from "react-router-dom";

function Activity() {
  return (
    <div>
      <h4 className="hello">สวัสดี, นี่คือกิจกรรมของคุณ</h4>
      <Grid>
        <Paper
          elevation={4}
          sx={{ width: "90%",height:300, marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid>
            <div className="yourActivity">กิจกรรมของคุณ</div>
          </Grid>
          <div className="yourActivitytext">ยังไม่มีกิจกรรม</div>


        </Paper>
      </Grid>
    </div>
  );
}

export default Activity;
