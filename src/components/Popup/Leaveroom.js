import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import "./EditProfilePopup.css";
import SaveIcon from "@mui/icons-material/Save";
import RegexTextField from "../RegexTextField";
import { ax, useAuth } from "../../auth/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import ReportIcon from "@mui/icons-material/Report";
function Leaveroom() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        sx={{ borderRadius: 3, width: 80 }}
        style={{ background: "#E7E6E5" }}
        onClick={handleClickOpen}
      >
        <LogoutIcon sx={{ color: "#5F498C" }} />
        <div className="leave">ออก</div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Stack direction="row" justifyContent="center">
              <Box>
                <ReportIcon sx={{ fontSize: 96, color: "#7D0000" }} />
              </Box>
            </Stack>
            <div className="textleave">ต้องการออกจากห้องเรียนนี้ใช่หรือไม่</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <div className="answer1">ยกเลิก</div>
          </Button>
          <Button
            variant="contained"
            style={{ background: "#7D0000" }}
            sx={{ width: 150 }}
            onClick={handleClose}
          >
            <div className="answer2">ใช่</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Leaveroom;
