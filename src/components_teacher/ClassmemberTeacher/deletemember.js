import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import "./deletemember.css"
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const columns = [
  { field: "id", headerName: "ID", width: 10 },
  {
    field: "firstName",
    headerName: "ชื่อ",
    width: 90,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "นามสกุล",
    width: 100,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    firstName: "ชนาวัฒน์",
    lastName: "ทั้วสุภาพ",
  },
  {
    id: 2,
    firstName: "นัฏฐวัฒน์",
    lastName: "สิงห์อินทร์",
  },
  {
    id: 3,
    firstName: "เมธาศักดิ์",
    lastName: "ทิพย์กองลาศ",
  },
  {
    id: 4,
    firstName: "อิฟฟาฮาน",
    lastName: "สุขสุวรรณ",
  },
  { id: 5, 
    firstName: "ธรรมาธิป", 
    lastName: "ชิตพงศ์" ,
  },
];

function DeleteMember() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fullWidth, setFullWidth] = React.useState(true);
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        style={{ background: "#D64A55" }}
      >
        <DeleteOutlineIcon />
        <div className="deletebutton">ลบสมาชิก</div>
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth sx={{width:'100%', marginLeft:'auto', marginRight:'auto'}}>
        <DialogTitle>
          <div className="deletemember">ลบสมาชิก</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Prompt" }}>
            เลือกสมาชิกที่ต้องการลบออกจากห้องเรียน
          </DialogContentText>
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              style={{ fontFamily: "prompt" }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontFamily: "Prompt" ,color: "#7c7c7c"}}>
            ยกเลิก
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ fontFamily: "Prompt", color: "white", width: 100,background:"#D64A55" }}
          >
            ลบ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteMember;
