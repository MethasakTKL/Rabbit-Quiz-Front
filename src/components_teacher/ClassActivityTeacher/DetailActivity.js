import React from "react";
import "./DetailActivity.css";
import { Button, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, col1: 1, col2: "ชนาวัฒน์ ทั้วสุภาพ", col3: "รดน้ำ", col4: 1 },
  { id: 2, col1: 2, col2: "นัฏฐวัฒน์ สิงห์อินทร์", col3: "รดน้ำ", col4: 1 },
  { id: 3, col1: 3, col2: "เมธาศักดิ์ ทิพย์กองลาศ", col3: "รดน้ำ", col4: 1 },
  { id: 4, col1: 4, col2: "อิฟฟาฮาน สุขสุวรรณ", col3: "รดน้ำ", col4: 1 },
  { id: 5, col1: 5, col2: "ธรรมาธิป ชิตพงศ์", col3: "ไม่ได้ส่ง", col4: 0 },
];

const columns = [
  { field: "col1", headerName: "ลำดับ", width: 10 },
  { field: "col2", headerName: "ชื่อ-นามสกุล", width: 150 },
  { field: "col3", headerName: "สถานะ", width: 100 },
  { field: "col4", headerName: "คะแนน", width: 100 },
];

function DetailActivity() {
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
        onClick={handleClickOpen}
        style={{ background: "#7AD400" }}
      >
        <div className="editbutton">รายละเอียด</div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="titledialog">รายละเอียด</div>
        </DialogTitle>
        <DialogContent>
          <div>ทั้งหมด 5 คน</div>
          <div style={{ height: 500, width: "auto" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <div className="cancelbutton">ยกเลิก</div>
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ width: 150 }}
          >
            <div className="createbutton">บันทึก</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DetailActivity;
